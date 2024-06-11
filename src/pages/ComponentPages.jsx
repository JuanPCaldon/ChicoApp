import React from 'react'
import Button from '../components/atoms/Button/Button.atom'
import Checkbox from '../components/atoms/Input/Checkbox.atom'
import Icon from '../components/atoms/Media/Icon.atom'
import Radio from '../components/atoms/Input/Radio.atom'
import Span from '../components/atoms/Labels/Span.atom'
import Paragraph from '../components/atoms/Labels/Paragraph.atom'
import Label from '../components/atoms/Labels/Label.atom'
import InputText from '../components/atoms/Input/InputText.atom'
import InputPassword from '../components/atoms/Input/InputPassword.atom'
import InputNumber from '../components/atoms/Input/InputNumber.atom'
import Heading from '../components/atoms/Labels/Heading.atom'
import Link from '../components/atoms/Links/Link.atom'

import Carousel from '../components/molecule/Carousel/Carousel.molecule'
export const ComponentPages = () => {

  return (

    <div>
      <Button className="primary" label="Ingresar" type="button" />
      <InputText name="" value="" onChange={() => { }} />
      <InputPassword name="" value="" onChange={() => { }} />
      <InputNumber name="" value="" onChange={() => { }} />

      <Checkbox
        id="exampleCheckbox"
        name="example"
        checked={null}
        // onChange={handleCheckbxoChange}
        label="Accept Terms and Conditions"
      />
      <Icon iconClass="bi bi-bootstrap" size="fa-3x" className="custom-icon" />
      <Radio
        id="option1"
        name="example"
        value="option1"
        // checked={selectedOption === 'option1'}
        // onChange={handleRadioChange}
        label="Option 1" />
      <Radio id="option2"
        name="example"
        value="option2"
        // checked={selectedOption === 'option2'}
        // onChange={handleRadioChange}
        label="Option 2" />

      <Span
        className="custom-span"
      //  onClick={handleClick}
      >
        Click me!
      </Span>

      <Paragraph className="custom-paragraph"
      // onClick={handleClick}
      >
        This is a paragraph.
      </Paragraph>


      <Label htmlFor="exampleInput" className="custom-label"
      // onClick={handleLabelClick}
      >Enter your text:
      </Label>
      <InputText id="exampleInput" name="exampleInput" value="" placeholder='Enter your text' onChange={() => { }} />


      <Heading level={1} className="custom-heading"
      // onClick={() => handleHeadingClick(1)}
      >
        Heading 1
      </Heading>
      <Heading level={2} className="custom-heading"
      // onClick={() => handleHeadingClick(2)}
      >
        Heading 2
      </Heading>
      <Heading level={3} className="custom-heading"
      // onClick={() => handleHeadingClick(3)}
      >
        Heading 3
      </Heading>

      <Link href="https://example.com" className="custom-link"
        // onClick={handleLinkClick}
      >
        Visit Example
      </Link>


      <Carousel></Carousel>

    </div>
  )
}
export default ComponentPages