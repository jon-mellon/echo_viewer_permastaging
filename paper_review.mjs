import { paperReviewAllowed } from "./paper_review_access.mjs?v=a2c20939df36fd83";
import { h } from "./dom_builder.mjs?v=a2c20939df36fd83";

if (paperReviewAllowed()) {
  await import("./paper_review_app.mjs?v=a2c20939df36fd83");
} else {
  document.body.replaceChildren(h("main", {}, h("h1", { textContent: "Paper review is not available on this site." }),
    h("p", { textContent: "This preview is limited to the permastaging website." })));
}
