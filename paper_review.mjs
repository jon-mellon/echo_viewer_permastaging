import { paperReviewAllowed } from "./paper_review_access.mjs?v=ef3404105d9f1c14";
import { h } from "./dom_builder.mjs?v=ef3404105d9f1c14";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=ef3404105d9f1c14");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
