import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "C:/Users/Janelle/glick-forestry-qwik-app/src/components/starter/infobox/infobox";

// export default component$(() => {
//     return <section class="section bright"> Services</section>;
// });


export default component$(() => {
  return (
    <>
      
      <div class="container container-center container-spacing-xl">
        Services
      </div>

      <div class="container container-flex">
        <Infobox>
            <div q:slot="title" class="">
                Homeowner Consulting 
            </div>
        </Infobox> 
        <Infobox>
            <div q:slot="title" class="">
                Field and Fuels Mowing
            </div>
        </Infobox>
        <Infobox>
            <div q:slot="title" class="">
                Tree Thinning and Trimming
            </div>
        </Infobox>
        <Infobox>
            <div q:slot="title" class="">
                Hand Piling
            </div>
        </Infobox>
      
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Glick Forestry",
  meta: [
    {
      name: "description",
      content: "Glick forestry Services page",
    },
  ],
};