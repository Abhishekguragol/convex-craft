import "./App.css";
import React from "react";
import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Tabs,
    Tab,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

const App = () => {
return (
<div className="App">
<div className="App"><div className="App"><Navbar><NavbarContent className="sm:flex gap-4" justify="center"><NavbarItem><Link color="primary" href="#"><content>Features</content></Link></NavbarItem><NavbarItem ><Link href="#" current="page"><content>Customers</content></Link></NavbarItem><NavbarItem><Link color="foreground" href="#"><content>Integrations</content></Link></NavbarItem></NavbarContent><NavbarContent justify="end"><NavbarItem className="hidden lg:flex"><Link href="#"><content>Login</content></Link></NavbarItem><NavbarItem><Button color="primary" href="#" variant="flat"><content>Sign Up</content></Button></NavbarItem></NavbarContent></Navbar><Accordion><AccordionItem key="1" label="Accordion 1" title="Accordion 1"><content>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</content></AccordionItem><AccordionItem key="2" label="Accordion 2" title="Accordion 2"><content>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</content></AccordionItem><AccordionItem key="3" label="Accordion 3" title="Accordion 3"><content>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</content></AccordionItem></Accordion></div><div className="component"><Card><CardBody><p><content>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.</content></p></CardBody></Card></div><div className="component"><Tabs label="Options"><Tab key="photos" title="Photos"><Card><CardBody><content>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.</content></CardBody></Card></Tab><Tab key="music" title="Music"><Card><CardBody><content>Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.</content></CardBody></Card></Tab><Tab key="videos" title="Videos"><Card><CardBody><content>Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</content></CardBody></Card></Tab></Tabs></div><div className="component"><Table label="Example static collection table"><TableHeader><TableColumn><content>NAME</content></TableColumn><TableColumn><content>ROLE</content></TableColumn><TableColumn><content>STATUS</content></TableColumn></TableHeader><TableBody><TableRow key="1"><TableCell><content>Tony Reichert</content></TableCell><TableCell><content>CEO</content></TableCell><TableCell><content>Active</content></TableCell></TableRow><TableRow key="2"><TableCell><content>Zoey Lang</content></TableCell><TableCell><content>Technical Lead</content></TableCell><TableCell><content>Paused</content></TableCell></TableRow><TableRow key="3"><TableCell><content>Jane Fisher</content></TableCell><TableCell><content>Senior Developer</content></TableCell><TableCell><content>Active</content></TableCell></TableRow><TableRow key="4"><TableCell><content>William Howard</content></TableCell><TableCell><content>Community Manager</content></TableCell><TableCell><content>Vacation</content></TableCell></TableRow></TableBody></Table></div></div>
</div>
);
};

export default App;