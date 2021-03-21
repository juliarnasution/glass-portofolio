import { Switch, Route } from "react-router-dom";
import { About } from "./content/About";
import { Contact } from "./content/Contact";
import { Projects } from "./content/Projects";
import { Skills } from "./content/Skills";

export function Content() {
    return (
        <Switch>
            <Route exact path="/">
                <About/>
            </Route>
            <Route path="/skill">
                <Skills/>
            </Route>
            <Route path="/project">
                <Projects/>
            </Route>                    
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
    )
}