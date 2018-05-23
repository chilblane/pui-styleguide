# Flyout

## Description
The flyout appears from the right side of the window and overlays all other content until it is closed. Its
visibility is controlled with the `open` property. It can take a custom `width`. The contents of the header
and the body are set with the `header` and `children` properties, respectively. The behavior of the close
button is defined through the `close` callback.

## Examples

```jsx
::title=Basic example
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {created, show, disableAnimation} = this.state;

    const children = (
      <Form>
        <FormRow>
          <FormCol name="name" label="Task Name">
            <Input placeholder="Enter Task Name"/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol className="txt-r">
            <div>
              <DefaultButton alt onClick={() => this.setState({show: false})}>Cancel</DefaultButton>
              <DefaultButton onClick={() => this.setState({created: new Date(), show: false})}>Create</DefaultButton>
            </div>
          </FormCol>
        </FormRow>
      </Form>
    );

    return (
      <div>
        <Form>
          <FormRow>
            <FormCol fixed hideHelpRow={true}>
              <DefaultButton onClick={() => this.setState({show: true})}>
                Open Flyout
              </DefaultButton>
            </FormCol>
            <FormCol inline labelPosition="after" label="Disable Animation" hideHelpRow={true}>
              <Toggle size="medium" onChange={() => this.setState({disableAnimation: !this.state.disableAnimation})}/>
            </FormCol>
          </FormRow>
        </Form>
        {created && <p className="mtl">Last task created: {created.toLocaleString()}</p>}

        <Flyout {...{
          animationDuration: this.state.disableAnimation ? 0 : undefined,
          show,
          header: <h3>Create Task</h3>,
          headerClassName: 'header-class',
          bodyClassName: 'body-class',
          children,
          onHide: () => this.setState({show: false})
        }}/>
      </div>
    );
  }
}
<Page/>
```

## Installation & Usage

#### React
`npm install pivotal-ui --save`

`import {Flyout} from 'pivotal-ui/react/flyout';`

## Props

| Property           | Required    | Type        | Default                               | Description                                                            |
| ------------------ | ----------- | ----------- | ------------------------------------- | ------------                                                           |
| animationDuration  | no          | Number      | 200                                   | Animation duration in milliseconds (Set to <= 0 to disable animations) |
| animationEasing    | no          | String      | cubic-bezier(0.25, 0.46, 0.45, 0.94)  | Animation easing function                                              |
| bodyClassName      | no          | String      |                                       | Class(es) to apply to the body                                         |
| children           | no          | Any         |                                       | Contents of the flyout body                                            |
| className          | no          | String      |                                       | Class(es) to apply to the flyout backdrop                              |
| dialogClassName    | no          | String      |                                       | Class(es) to apply to the modal dialog                                 |
| header             | no          | Any         |                                       | Contents of the flyout header                                          |
| headerClassName    | no          | String      |                                       | Class(es) to apply to the header                                       |
| iconSrc            | no          | String      | 'close'                               | Icon to use for the close button                                       |
| onHide             | yes         | Function    |                                       | Callback that fires as soon as the modal begins closing                |
| show               | no          | Boolean     | false                                 | Whether or not the flyout is visible                                   |
| width              | no          | String      | 480px                                 | Width of flyout content                                                |
