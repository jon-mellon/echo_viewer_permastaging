import { paperReviewAllowed } from "./paper_review_access.mjs?v=2defc2bf91433492";
import { h } from "./dom_builder.mjs?v=2defc2bf91433492";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=2defc2bf91433492");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
