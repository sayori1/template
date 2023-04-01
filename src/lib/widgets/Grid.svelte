<script>
    export let width;
    export let height;
    export let rowCount;
    export let columnCount;
    export let rowGap = 0;
    export let columnGap = 0;
  
    const gridStyle = `
      display: grid;
      grid-template-columns: repeat(${columnCount}, ${width});
      grid-template-rows: repeat(${rowCount}, ${height});
      grid-gap: ${rowGap}px ${columnGap}px;
    `;
  </script>
  
  <div style="{gridStyle}">
    <slot />
  </div>
  
  <style>
    :host {
      display: block;
    }
  </style>
  