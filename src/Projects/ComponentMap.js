import React from "react";
import { projectList } from "./projectLists";
import NotFound from "../Components/NotFound";

const ComponentMap={};

for(let i=0;i<projectList.length;i++){
    if(Object.hasOwn(projectList[i],'slug')){
        ComponentMap[projectList[i].slug]=React.lazy(() => 
            import(`./ProjectComponents/${projectList[i].slug}.jsx`)
            .catch(() => {
                return {default: NotFound};
            })
    
    );
    }
}

export default ComponentMap