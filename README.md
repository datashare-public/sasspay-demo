# Sasspay Demo

SassPay is a sample application designed to show off [DataShare](http://datashare.co). It demonstrates how you
might go about implementing visualizations and dashboards into your application. This demo is a simple NextJS app.

You can view the demo live at [sasspay.io](https://sasspay.io).

This project utilizes the [@datashare/react](https://www.npmjs.com/package/@datashare/react) package for
its integration.

## Framework Integration

The datashare framework integration is done in two pieces:

* backend code to generate your secure user tokens such as the [end user id handler](src/pages/api/end_user_token/%5Bend_user%5D/index.ts)
* frontend code to integrate the `DataShareProvider` into your [app](src/pages/_app.tsx)

## Visualization

Visualizations can be rendered using the `DataShareVisualization` component. See [visualization.tsx](src/pages/visualization.tsx) for an example.

## Dashboard

Dashboards can be rendered using the `DataShareDashboard` component. See [dashboard.tsx](src/pages/dashboard.tsx) for an example.
