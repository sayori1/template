<script lang="ts">
  import { getCSSColor, type Color } from "./types/color";
  import { BorderRadius, EdgeInsets } from "./types/layout";

    export let width: Size = "0px";
    export let height: Size = "0px";
    export let color: Color = 'transparent';
    export let widthExpandable: boolean = false;
    export let heightExpandable: boolean = false;
    export let padding: EdgeInsets = EdgeInsets.all('0px');
    export let margin: EdgeInsets = EdgeInsets.all('0px');
    export let borderRadius: BorderRadius = BorderRadius.all(0);
    export let renderChildrenOutside: boolean = false;

    $: style = function(){
        let _style = `min-width:${width}; min-height:${height};
        background-color:${getCSSColor(color)};`;

        if(widthExpandable)
            _style += 'max-width:fit-content;';
        else
            _style += `width:${width};`;
        
        if(heightExpandable)
            _style += 'max-height:fit-content;';
        else
            _style += `height:${height};`;
        
        if(!renderChildrenOutside){
            _style += "overflow:hidden;"
        }

        _style += padding.toPadding();
        _style += margin.toMargin();
        _style += `border-radius:${borderRadius.toCSS()};`

        
        return _style;
    }();

</script>

<div style={style}>
    <slot></slot>
</div>
