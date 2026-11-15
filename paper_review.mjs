import { paperReviewAllowed } from "./paper_review_access.mjs?v=3b5cd2ea8cf013b7";
import { h } from "./dom_builder.mjs?v=3b5cd2ea8cf013b7";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=3b5cd2ea8cf013b7");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
