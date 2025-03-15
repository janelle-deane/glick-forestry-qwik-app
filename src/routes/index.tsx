import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../components/starter/infobox/infobox";

export default component$(() => {
  return (
    <>
      
      <div class="container container-center container-spacing-xl">
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            Services
          </div>
          <>
          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Past Work
            </div>
  
          </Infobox>

        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Glick Forestry",
  meta: [
    {
      name: "description",
      content: "Glick forestry intro page",
    },
  ],
};
