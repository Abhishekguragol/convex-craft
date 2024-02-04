import "./page.css"
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
    return (
        <div style={{ display:"inline", flexDirection:"row", paddingTop:"30px", marginTop:"30px"}}>
            <div style={{ display:"inline", flexDirection:"row"}}>
                {/* Insert the layout editor here */}
                
            </div>
            <div style={{ display:"inline", flexDirection:"row", position:"fixed", bottom:"0"}}>
                <Button variant={"secondary"} style={{margin:"30px"}}>Save</Button>
                <Button variant={"secondary"}>Save new version</Button>
            </div>
        </div>
    );
  }
