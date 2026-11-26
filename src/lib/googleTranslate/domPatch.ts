/**
 * Google Translate rewrites the page while React owns it.
 *
 * When a language is active the widget replaces translated text nodes with `<font>`
 * wrappers holding a copy of the text. React still references the original nodes, so
 * the next commit calls `parent.removeChild(originalTextNode)` and the browser throws:
 *
 *   NotFoundError: Failed to execute 'removeChild' on 'Node':
 *   The node to be removed is not a child of this node.
 *
 * That happens on every route change, dropdown toggle or modal close while a
 * translation is active — which is why the widget looks fine in a quick local test and
 * falls apart in production.
 *
 * The node React wanted gone is already gone (Google detached it), so the intent of the
 * call is satisfied. Make the two DOM operations React uses for reconciliation tolerate
 * that state instead of throwing.
 */

const PATCH_FLAG = '__assaudGoogleTranslateDomPatch';

type PatchableNodePrototype = Node & {
  [PATCH_FLAG]?: boolean;
};

let patched = false;

export function patchDomForGoogleTranslate(): void {
  if (patched || typeof window === 'undefined') return;

  const proto = window.Node?.prototype as PatchableNodePrototype | undefined;
  if (!proto || proto[PATCH_FLAG]) return;

  const originalRemoveChild = proto.removeChild;
  const originalInsertBefore = proto.insertBefore;
  const originalAppendChild = proto.appendChild;

  proto.removeChild = function removeChild<T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      // Google moved or unwrapped the node - removal is already effectively done.
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  proto.insertBefore = function insertBefore<T extends Node>(
    this: Node,
    newNode: T,
    referenceNode: Node | null,
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      // The anchor node was replaced by Google; append instead of throwing.
      return originalAppendChild.call(this, newNode) as T;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };

  proto[PATCH_FLAG] = true;
  patched = true;
}
