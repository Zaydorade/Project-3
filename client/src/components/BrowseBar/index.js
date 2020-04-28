import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const BrowseBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="shadow" color="secondary" light expand="md">
      <NavbarToggler className="shadow" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="text-light textshadows" nav caret >
              Region
              </DropdownToggle>
            <DropdownMenu className="bg-dark px-2 border rounded border-dark"  >
              <DropdownItem className={props.value.regionSearch.includes('Americas') ?
                "active text-center mb-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="regionSearch" onClick={props.handleChange}
                value={props.value.regionSearch}>
                Americas
                </DropdownItem>
              <DropdownItem className={props.value.regionSearch.includes('Europe/Asia') ?
                "active text-center my-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="regionSearch" onClick={props.handleChange}
                value={props.value.regionSearch}>
                Europe/Asia
                </DropdownItem>
              <DropdownItem className={props.value.regionSearch.includes('Oceania') ?
                "active text-center mt-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="regionSearch" onClick={props.handleChange}
                value={props.value.regionSearch}>
                Oceania
                </DropdownItem>
            </DropdownMenu >
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="text-light textshadows" nav caret>
              Platforms
              </DropdownToggle>
            <DropdownMenu className="bg-dark px-2 border rounded border-dark" right>
              <DropdownItem className={props.value.platformSearch.includes('PC') ?
                "active text-center mb-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="platformSearch" onClick={props.handleChange}
                value={props.value.platformSearch}>
                PC
                </DropdownItem>
              <DropdownItem className={props.value.platformSearch.includes('Xbox') ?
                "active text-center my-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="platformSearch" onClick={props.handleChange}
                value={props.value.platformSearch} >
                Xbox
                </DropdownItem>
              <DropdownItem className={props.value.platformSearch.includes('Playstation') ?
                "active text-center my-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="platformSearch" onClick={props.handleChange}
                value={props.value.platformSearch}>
                Playstation
                </DropdownItem>
              <DropdownItem className={props.value.platformSearch.includes('Nintendo Switch') ?
                "active text-center my-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="platformSearch" onClick={props.handleChange}
                value={props.value.platformSearch}>
                Nintendo Switch
                </DropdownItem>
              <DropdownItem className={props.value.platformSearch.includes('Mobile') ?
                "active text-center mt-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="platformSearch" onClick={props.handleChange}
                value={props.value.platformSearch}>
                Mobile
                </DropdownItem>
            </DropdownMenu >
          </UncontrolledDropdown>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="text-light textshadows" nav caret>
              Style
              </DropdownToggle>
            <DropdownMenu className="bg-dark px-2 border rounded border-dark" right>
              <DropdownItem className={props.value.styleSearch.includes('Social') ?
                "active text-center mb-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="styleSearch" onClick={props.handleChange}
                value={props.value.styleSearch}>
                Social
                </DropdownItem>
              <DropdownItem className={props.value.styleSearch.includes('Competitive') ?
                "active text-center my-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="styleSearch" onClick={props.handleChange}
                value={props.value.styleSearch}>
                Competitive
                </DropdownItem>
              <DropdownItem className={props.value.styleSearch.includes('Casual') ?
                "active text-center mt-1 text-dark bg-light border rounded" :
                "text-center mb-1 text-light border rounded"}
                name="styleSearch" onClick={props.handleChange}
                value={props.value.styleSearch}>
                Casual
                </DropdownItem>
            </DropdownMenu >
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default BrowseBar;