import { paperReviewAllowed } from "./paper_review_access.mjs?v=7efd96f7e47c3f5a";
import { h } from "./dom_builder.mjs?v=7efd96f7e47c3f5a";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=7efd96f7e47c3f5a");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
