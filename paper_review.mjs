import { paperReviewAllowed } from "./paper_review_access.mjs?v=aa4071294b6eec8d";
import { h } from "./dom_builder.mjs?v=aa4071294b6eec8d";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=aa4071294b6eec8d");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
