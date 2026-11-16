import { paperReviewAllowed } from "./paper_review_access.mjs?v=4d2c68b3bc640cfc";
import { h } from "./dom_builder.mjs?v=4d2c68b3bc640cfc";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=4d2c68b3bc640cfc");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
