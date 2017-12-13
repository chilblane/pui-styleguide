# Panels

## Description

Using Panels, you can organize information collections into logical groups, aggregate your content and show it to be context specific. They include box title, header, footer, and can be combined with any background. See it in action [here](https://pui-pivots.cfapps.io/).

Do        | Don't
----------|----------
Use a panel to logically group content that has the following form: header, body, and/or footer, and/or title. | Use a panel as a generic wrapping element. Instead, avail yourself of the various background color modifiers we have.
Use multiple panels or list-group inside to group a collection of related content objects. | Overload the panel header with too many calls to action.
Distinguish between primary and secondary CTAs in the title/header and footer (e.g., primary vs secondary buttons). | Use a panel when screen real estate is valuable, instead consider a table layout or grouped-list.

## Examples

```jsx
::title=Panel
::description= By default the panel applies basic padding to content.
<Panel className="bg-neutral-11 optional-class" bodyClassName="opt-inner-class">
    <p>Panel content</p>
</Panel>
```

```jsx
::title=Panel with box-shadow and rounded corners
::description=Adding `.box-shadow-1` to the `.panel` lightly pops the panel off the page. This is the preferred aesthetic instead of a border. This works great for pushing the panel up from the workspace.
<Panel className="bg-neutral-11 box-shadow-1 border-rounded" bodyClassName="opt-inner-class">
    <p>Panel content</p>
</Panel>
```

```jsx
::title=Panel with header and footer
<Panel className="bg-neutral-11 box-shadow-1 border-rounded" header='header' footer='Panel footer'>
    Base Panel with base header
</Panel>
```

```jsx
::title=Panel with Actions
<Panel
    className="bg-neutral-11 box-shadow-1 border-rounded"
    title="Title"
    titleCols={[<button className="btn btn-default mrl">Go</button>, <button className="btn btn-default-alt">Stop</button>]}
    header="Header"
    headerCols={[<a href="#">click me</a>]}>
  Panel with custom header and actions
</Panel>
```

```jsx
::title=Panel with loading animation
::description=Add a loading animation to a panel with the class `panel-loading-indicator`. The animation is intended for panels that utilize panel-header and panel-body. This should be used when the content of the panel is being loaded asynchronously and you’d like to communicate to the user that their content is on the way.
<Panel loading={true} title="Loading Panel">
    Look, I'm loading!
</Panel>
```

## Installation & Usage

#### React
`npm install pivotal-ui --save`

`import {Panel} from 'pivotal-ui/react/panels';`

#### CSS Only
`npm install pivotal-ui --save`

`import * as Panels from 'pivotal-ui/css/panels';`

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
title         | no | String                   | | String to render in the title
titleCols         | no | Array                   | [] | An array of nodes to render on the title row
titleClassName         | no | String                   | | Class(es) to apply to the title
panelClassName         | no | String                   | | Class(es) to apply to the content area
header         | no | String                   | | String to render in the header
headerCols         | no | Array                   | [] | An array of nodes to render on the header row
headerClassName         | no | String                   | | Class(es) to apply to the header
loading         | no | Boolean                   | | If true, will render a pulsing loading bar
bodyClassName         | no | String                   | | Class(es) to apply to the body
footer         | no | Node                   | | Node to render in the footer
footerClassName         | no | String                   | | Class(es) to apply to the footer
