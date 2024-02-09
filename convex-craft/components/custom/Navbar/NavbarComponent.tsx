import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

const NavbarComponent = (props: any) => {
    return (
        <div>
            <Navbar
                isBordered={props.isBordered}
                height={"70px"}
                maxWidth="full"
            >
                <NavbarBrand>
                    <p className="font-bold text-inherit">{props.brandText}</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    {props.navItems.map(
                        (nav: { href: string; text: string }) => {
                            return (
                                <NavbarItem>
                                    <Button
                                        as={Link}
                                        color="primary"
                                        href={nav.href}
                                        variant="light"
                                    >
                                        {nav.text}
                                    </Button>
                                </NavbarItem>
                            );
                        }
                    )}
                </NavbarContent>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
