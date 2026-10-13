import NotFound from "../Components/NotFound";
import { blogLists } from "./blogLists";
import React from "react";

const ComponentMap={};

for(let i=0;i<blogLists.length;i++){
    if(Object.hasOwn(blogLists[i],'slug')){
        ComponentMap[blogLists[i].slug]=React.lazy(() => 
            import(`./Components/${blogLists[i].slug}.jsx`)
            .catch(() => {
                return {default: NotFound};
            })
    
    );
    }
}

export default ComponentMap