import{a as P,b as E}from"../../chunk-4AWTDQSM.js";import{b}from"../../chunk-4SGWVGTZ.js";import{a as D}from"../../chunk-3NBPGRO4.js";import"../../chunk-WBVK3N4J.js";import{a as w,b as A,c as u,e as k}from"../../chunk-5N5HCB7M.js";function _(t,r,e,o){var i=h();if(o)for(var n=0;n<o.length;n++)i=o[n](i);var s=r(function(c){i.initializeInstanceElements(c,a.elements)},e),a=i.decorateClass(T(s.d.map(S)),t);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}function h(){h=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(r,e){["method","field"].forEach(function(o){e.forEach(function(i){i.kind===o&&i.placement==="own"&&this.defineClassElement(r,i)},this)},this)},initializeClassElements:function(r,e){var o=r.prototype;["method","field"].forEach(function(i){e.forEach(function(n){var s=n.placement;if(n.kind===i&&(s==="static"||s==="prototype")){var a=s==="static"?r:o;this.defineClassElement(a,n)}},this)},this)},defineClassElement:function(r,e){var o=e.descriptor;if(e.kind==="field"){var i=e.initializer;o={enumerable:o.enumerable,writable:o.writable,configurable:o.configurable,value:i===void 0?void 0:i.call(r)}}Object.defineProperty(r,e.key,o)},decorateClass:function(r,e){var o=[],i=[],n={static:[],prototype:[],own:[]};if(r.forEach(function(a){this.addElementPlacement(a,n)},this),r.forEach(function(a){if(!f(a))return o.push(a);var l=this.decorateElement(a,n);o.push(l.element),o.push.apply(o,l.extras),i.push.apply(i,l.finishers)},this),!e)return{elements:o,finishers:i};var s=this.decorateConstructor(o,e);return i.push.apply(i,s.finishers),s.finishers=i,s},addElementPlacement:function(r,e,o){var i=e[r.placement];if(!o&&i.indexOf(r.key)!==-1)throw new TypeError("Duplicated element ("+r.key+")");i.push(r.key)},decorateElement:function(r,e){for(var o=[],i=[],n=r.decorators,s=n.length-1;s>=0;s--){var a=e[r.placement];a.splice(a.indexOf(r.key),1);var l=this.fromElementDescriptor(r),c=this.toElementFinisherExtras((0,n[s])(l)||l);r=c.element,this.addElementPlacement(r,e),c.finisher&&i.push(c.finisher);var p=c.extras;if(p){for(var d=0;d<p.length;d++)this.addElementPlacement(p[d],e);o.push.apply(o,p)}}return{element:r,finishers:i,extras:o}},decorateConstructor:function(r,e){for(var o=[],i=e.length-1;i>=0;i--){var n=this.fromClassDescriptor(r),s=this.toClassDescriptor((0,e[i])(n)||n);if(s.finisher!==void 0&&o.push(s.finisher),s.elements!==void 0){r=s.elements;for(var a=0;a<r.length-1;a++)for(var l=a+1;l<r.length;l++)if(r[a].key===r[l].key&&r[a].placement===r[l].placement)throw new TypeError("Duplicated element ("+r[a].key+")")}}return{elements:r,finishers:o}},fromElementDescriptor:function(r){var e={kind:r.kind,key:r.key,placement:r.placement,descriptor:r.descriptor},o={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,o),r.kind==="field"&&(e.initializer=r.initializer),e},toElementDescriptors:function(r){if(r!==void 0)return C(r).map(function(e){var o=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),o},this)},toElementDescriptor:function(r){var e=String(r.kind);if(e!=="method"&&e!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+e+'"');var o=v(r.key),i=String(r.placement);if(i!=="static"&&i!=="prototype"&&i!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+i+'"');var n=r.descriptor;this.disallowProperty(r,"elements","An element descriptor");var s={kind:e,key:o,placement:i,descriptor:Object.assign({},n)};return e!=="field"?this.disallowProperty(r,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=r.initializer),s},toElementFinisherExtras:function(r){var e=this.toElementDescriptor(r),o=y(r,"finisher"),i=this.toElementDescriptors(r.extras);return{element:e,finisher:o,extras:i}},fromClassDescriptor:function(r){var e={kind:"class",elements:r.map(this.fromElementDescriptor,this)},o={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,o),e},toClassDescriptor:function(r){var e=String(r.kind);if(e!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+e+'"');this.disallowProperty(r,"key","A class descriptor"),this.disallowProperty(r,"placement","A class descriptor"),this.disallowProperty(r,"descriptor","A class descriptor"),this.disallowProperty(r,"initializer","A class descriptor"),this.disallowProperty(r,"extras","A class descriptor");var o=y(r,"finisher"),i=this.toElementDescriptors(r.elements);return{elements:i,finisher:o}},runClassFinishers:function(r,e){for(var o=0;o<e.length;o++){var i=(0,e[o])(r);if(i!==void 0){if(typeof i!="function")throw new TypeError("Finishers must return a constructor.");r=i}}return r},disallowProperty:function(r,e,o){if(r[e]!==void 0)throw new TypeError(o+" can't have a ."+e+" property.")}};return t}function S(t){var r=v(t.key),e;t.kind==="method"?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:t.kind==="get"?e={get:t.value,configurable:!0,enumerable:!1}:t.kind==="set"?e={set:t.value,configurable:!0,enumerable:!1}:t.kind==="field"&&(e={configurable:!0,writable:!0,enumerable:!0});var o={kind:t.kind==="field"?"field":"method",key:r,placement:t.static?"static":t.kind==="field"?"own":"prototype",descriptor:e};return t.decorators&&(o.decorators=t.decorators),t.kind==="field"&&(o.initializer=t.value),o}function z(t,r){t.descriptor.get!==void 0?r.descriptor.get=t.descriptor.get:r.descriptor.set=t.descriptor.set}function T(t){for(var r=[],e=function(s){return s.kind==="method"&&s.key===i.key&&s.placement===i.placement},o=0;o<t.length;o++){var i=t[o],n;if(i.kind==="method"&&(n=r.find(e)))if(m(i.descriptor)||m(n.descriptor)){if(f(i)||f(n))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");n.descriptor=i.descriptor}else{if(f(i)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");n.decorators=i.decorators}z(i,n)}else r.push(i)}return r}function f(t){return t.decorators&&t.decorators.length}function m(t){return t!==void 0&&!(t.value===void 0&&t.writable===void 0)}function y(t,r){var e=t[r];if(e!==void 0&&typeof e!="function")throw new TypeError("Expected '"+r+"' to be a function");return e}function v(t){var r=x(t,"string");return typeof r=="symbol"?r:String(r)}function x(t,r){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,r||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function C(t){return L(t)||B(t)||$(t)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(t,r){if(!!t){if(typeof t=="string")return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(t,r)}}function g(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}function B(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L(t){if(Array.isArray(t))return t}var R=_([w("page-blog-list")],function(t,r){class e extends r{constructor(...i){super(...i);t(this)}}return{F:e,d:[{kind:"field",decorators:[E()],key:"blogPosts",value(){return[...P]}},{kind:"field",decorators:[b()],key:"location",value(){return D.location}},{kind:"field",static:!0,key:"styles",value(){return[A]}},{kind:"method",key:"render",value:function(){return u`
      <section>
        <page-title>Blog Posts</page-title>
        <ul class="blog-list">
          ${this.blogPosts.map(i=>u`
                <li>
                  <a href="blog/${i.slug}"> ${i.title} </a>
                </li>
              `)}
        </ul>
      </section>
    `}}]}},k);export{R as PageBlogList};
//# sourceMappingURL=page-blog-list.js.map