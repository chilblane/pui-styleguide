# Modals

## Description

We provide 3 components that can be used to assemble modals:

* `BaseModal`
* `ModalBody`
* `ModalFooter`

## Examples

```
import {DefaultButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';
```

```jsx-only
::title=Basic example with custom size and duration
class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false, disableAnimation: false};
  }

  render() {
    return (
      <div>
        <Form>
          <FormRow>
            <FormCol fixed>
              <DefaultButton onClick={() => this.setState({show: true})}>
                Open Modal
              </DefaultButton>
            </FormCol>
            <FormCol inline labelPosition="after" label="Disable Animation">
              <Toggle size="medium" onChange={() => this.setState({disableAnimation: !this.state.disableAnimation})}/>
            </FormCol>
          </FormRow>
        </Form>
        <BaseModal animationDuration={this.state.disableAnimation ? 0 : undefined}
                   title='What a Header!'
                   size="30%"
                   className='optional-custom-class'
                   show={this.state.show}
                   onHide={() => this.setState({show: false})}>
          <ModalBody><p>Text in a body</p><Input autoFocus placeholder="Tell me your darkest secrets"/></ModalBody>
          <ModalFooter>
            <DefaultButton onClick={() => this.setState({show: false})}>
              Close
            </DefaultButton>
          </ModalFooter>
        </BaseModal>
      </div>
    );
  }
}

<MyModal />
```
## Installation & Usage

#### React
`npm install pivotal-ui --save`

`import {BaseModal, ModalBody, ModalFooter} from 'pivotal-ui/react/modals';`

#### CSS Only
`npm install pivotal-ui --save`

`import * as Modals from 'pivotal-ui/css/modals';`

## Props

| Property          | Required   | Type                                                                                         | Default                              | Description                                             |
| ----------------  | ---------- | ----------                                                                                   | ----------                           | ------------                                            |
| animationDuration | no         | Number                                                                                       | 300                                  | Animation duration in milliseconds                      |
| animationEasing   | no         | String                                                                                       | cubic-bezier(0.25, 0.46, 0.45, 0.94) | Animation easing function                               |
| className         | no         | String                                                                                       |                                      | Class(es) to apply to the modal backdrop                |
| dialogClassName   | no         | String                                                                                       |                                      | Class(es) to apply to the modal dialog                  |
| disableAnimation  | no         | Boolean                                                                                      |                                      | If true, disables animation                             |                 |
| onHide            | yes        | Function                                                                                     |                                      | Callback that fires as soon as the modal begins closing |
| size              | no         | String, oneOf(['sm', 'small', 'large', 'lg']) or a valid css width value, eg. '44%', '900px' |                                      | Size variations                                         |
| show              | no         | Boolean                                                                                      |                                      | Whether the modal should be opened or closed            |
| title             | no         | Node                                                                                         |                                      | Title of the modal, shown at the top of the modal       |
