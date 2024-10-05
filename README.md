# Typography-pack

 This package combines TypeScript and CSS used to create various text components using the styled-components library. These components are useful for creating custom styles for different types of text.

## Installation

npm install typography-pack

### Package purpose

This package is for creating ready-to-use components for different texts. It is mainly used in user interface (UI) projects to present text in a more aesthetic and functional way.

### How to use?

``` typescript
import { 
  Display1, 
  H1, 
  Paragraph, 
  ButtonDefault, 
  InputDefault 
} from 'typography-pack';

const MyPage = () => {
  return (
    <div>
      <Display1 color="primary" align="center">
        Welcome to My Website
      </Display1>
      <H1 color="secondary" align="left" subColor="gradient-1">
        This is a Subheading
      </H1>
      <Paragraph color="black">
        This is a sample paragraph. It provides additional information to the readers.
      </Paragraph>
      <ButtonDefault color="white">
        Click Me!
      </ButtonDefault>
      <InputDefault color="black" placeholder="Type here..." />
    </div>
  );
};

```

#### Custom Colors

You can customize the colors used in the components by providing your own color values using the `mergeColors` function. This function takes an object with your custom colors and merges them with the default colors.

```typescript
import { mergeColors } from 'typography-pack';

const userColors = {
  "primary-500": "#ff5733",
  "secondary-500": "#33c4ff",
  ...
};

const colors = mergeColors(userColors);
```

##### License

This project is licensed under the MIT License.