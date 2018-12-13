Polymer({
  is: 'cells-atom-subheader',
  properties: {
    /**
    * Aria level for the heading (from 1 to 6).
    * If 0 is provided, the header text won't be treated as a heading.
    */
    headingLevel: {
      type: Number,
      value: 2
    }
  }
});
