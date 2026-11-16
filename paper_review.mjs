import { paperReviewAllowed } from "./paper_review_access.mjs?v=2b59ed2b9cf5ddd2";
import { h } from "./dom_builder.mjs?v=2b59ed2b9cf5ddd2";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=2b59ed2b9cf5ddd2");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
