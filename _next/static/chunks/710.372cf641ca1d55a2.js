(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return f}});var r=t(5893),o=t(9008),a=t.n(o),i=t(1163),s=t(7294),c=t(9147),l=t.n(c);t(2684),t(7319);let u=e=>{let n=(0,s.useRef)(null),o=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:o}=e;return{name:n,...function(e){let n;let o=null;{o=document.createElement("div");let a=t(4631);n=a(o,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){o&&t&&(t.appendChild(o),n.setOption("value",e))}})})}}}(o)}}),e.sources),c=(0,s.useRef)(null),u=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),f=(0,i.useRouter)(),d=f.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[p,m]=(0,s.useState)(null),[h,v]=(0,s.useState)(null);return(0,s.useEffect)(()=>{d?v(d[1]):v(o[0].name),u&&c.current&&c.current.appendChild(u.domElement);let t={active:!0},r=()=>{t.active=!1};try{let a=n.current,i=e.init({canvas:a,pageState:t,gui:u});i instanceof Promise&&i.catch(e=>{console.error(e),m(e)})}catch(s){console.error(s),m(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("teoxoy/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(p)})]}):null]}),(0,r.jsxs)("div",{className:l().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:l().sourceFileNav,children:(0,r.jsx)("ul",{children:o.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":h==e.name,onClick(){v(e.name)},children:e.name})},n))})}),o.map((e,n)=>(0,r.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":h==e.name},n))]})]})},f=e=>(0,r.jsx)(u,{...e})},2684:function(){if("end"in GPURenderPassEncoder.prototype||(GPURenderPassEncoder.prototype.end=GPURenderPassEncoder.prototype.endPass),"end"in GPUComputePassEncoder.prototype||(GPUComputePassEncoder.prototype.end=GPUComputePassEncoder.prototype.endPass),navigator.userAgent.indexOf("Firefox")>0){let e={info:{icon:"ℹ️",logFn:console.info},warning:{icon:"⚠️",logFn:console.warn},error:{icon:"⛔",logFn:console.error}},n=GPUDevice.prototype.createShaderModule;function t(e){let n=GPUDevice.prototype[e];GPUDevice.prototype[e]=function(e){return"auto"==e.layout&&delete e.layout,n.call(this,e)}}GPUDevice.prototype.createShaderModule=function(t){t.code=t.code.replaceAll("vec4f","vec4<f32>").replaceAll("vec3f","vec3<f32>").replaceAll("vec2f","vec2<f32>").replaceAll("vec4u","vec4<u32>").replaceAll("vec3u","vec3<u32>").replaceAll("vec2u","vec2<u32>").replaceAll("mat4x4f","mat4x4<f32>");let r=n.call(this,t);return r.compilationInfo().then(n=>{if(!n.messages.length)return;let t={error:0,warning:0,info:0};for(let o of n.messages)t[o.type]+=1;0==t.error&&validationError&&(t.error=1);let a=r.label,i=(a?'"'.concat(a,'"'):"Shader")+" returned compilation messages:";for(let s in t)t[s]>0&&(i+=" ".concat(t[s]).concat(e[s].icon));for(let c of(0==t.error?console.groupCollapsed(i):console.group(i),n.messages)){let l=c.type;e[l].logFn(c.message)}console.groupEnd()}),r},t("createRenderPipeline"),t("createRenderPipelineAsync"),t("createComputePipeline"),t("createComputePipelineAsync");let r=GPUCommandEncoder.prototype.beginRenderPass;GPUCommandEncoder.prototype.beginRenderPass=function(e){if(e.colorAttachments)for(let n of e.colorAttachments)"clear"==n.loadOp?n.loadValue=n.clearValue||[0,0,0,0]:n.loadValue="load";if(e.depthStencilAttachment){let t=e.depthStencilAttachment;"load"==t.depthLoadOp?t.depthLoadValue="load":t.depthLoadValue=t.depthClearValue||1,t.depthStoreOp||(t.depthStoreOp="discard"),"load"==t.stencilClearValue?t.stencilLoadValue="load":t.stencilLoadValue=t.stencilClearValue||0,t.stencilStoreOp||(t.stencilStoreOp="discard")}return r.call(this,e)};let o=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r=o.apply(this,n);return"webgpu"==n[0]&&(r.canvas=this),r};let a={},i=GPUCanvasContext.prototype.configure;GPUCanvasContext.prototype.configure=function(e){let n=this;a[n]||(a[n]=new MutationObserver(function(t){let r=!1;for(let o of t)("width"==o.attributeName||"height"==o.attributeName)&&(r=!0);r&&i.call(n,e)})),a[n].observe(n.canvas,{attributes:!0}),i.call(n,e)};let s=GPUCanvasContext.prototype.unconfigure;GPUCanvasContext.prototype.unconfigure=function(e){a[this]&&a[this].disconnect(),s.call(this,e)},GPU.prototype.getPreferredCanvasFormat=function(){return"bgra8unorm"}}},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return a},MO:function(){return i},O$:function(){return r},v8:function(){return o},zS:function(){return s}});let r=40,o=0,a=32,i=36,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},5710:function(e,n,t){"use strict";var r="src/sample/twoCubes/main.ts";t.r(n);var o=t(5975),a=t(7160),i=t(5671),s=t(4655),c=t(3569),l=t(1945);let u=async e=>{let{canvas:n,pageState:t}=e,r=await navigator.gpu.requestAdapter(),i=await r.requestDevice();if(!t.active)return;let u=n.getContext("webgpu"),f=window.devicePixelRatio||1;n.width=n.clientWidth*f,n.height=n.clientHeight*f;let d=navigator.gpu.getPreferredCanvasFormat();u.configure({device:i,format:d,alphaMode:"opaque"});let p=i.createBuffer({size:s.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(p.getMappedRange()).set(s.zS),p.unmap();let m=i.createRenderPipeline({layout:"auto",vertex:{module:i.createShaderModule({code:c.Z}),entryPoint:"main",buffers:[{arrayStride:s.O$,attributes:[{shaderLocation:0,offset:s.v8,format:"float32x4"},{shaderLocation:1,offset:s.Ax,format:"float32x2"}]}]},fragment:{module:i.createShaderModule({code:l.Z}),entryPoint:"main",targets:[{format:d}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),h=i.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),v=i.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g=i.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v,offset:0,size:64}}]}),x=i.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v,offset:256,size:64}}]}),b={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:h.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},P=n.width/n.height,w=o.Ue();o.G3(w,2*Math.PI/5,P,1,100);let y=o.Ue();o.Iu(y,y,a.al(-2,0,0));let M=o.Ue();o.Iu(M,M,a.al(2,0,0));let C=o.Ue(),V=o.Ue(),S=o.Ue();o.Iu(S,S,a.al(0,0,-7));let U=o.Ue(),G=o.Ue();requestAnimationFrame(function e(){if(!t.active)return;!function(){let e=Date.now()/1e3;o.U1(U,y,1,a.al(Math.sin(e),Math.cos(e),0)),o.U1(G,M,1,a.al(Math.cos(e),Math.sin(e),0)),o.Jp(C,S,U),o.Jp(C,w,C),o.Jp(V,S,G),o.Jp(V,w,V)}(),i.queue.writeBuffer(v,0,C.buffer,C.byteOffset,C.byteLength),i.queue.writeBuffer(v,256,V.buffer,V.byteOffset,V.byteLength),b.colorAttachments[0].view=u.getCurrentTexture().createView();let n=i.createCommandEncoder(),r=n.beginRenderPass(b);r.setPipeline(m),r.setVertexBuffer(0,p),r.setBindGroup(0,g),r.draw(s.MO,1,0,0),r.setBindGroup(0,x),r.draw(s.MO,1,0,0),r.end(),i.queue.submit([n.finish()]),requestAnimationFrame(e)})},f=()=>(0,i.T)({name:"Two Cubes",description:"This example shows some of the alignment requirements        involved when updating and binding multiple slices of a        uniform buffer. It renders two rotating cubes which have transform        matrices at different offsets in a uniform buffer.",init:u,sources:[{name:r.substring(20),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'opaque',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const matrixSize = 4 * 16; // 4x4 matrix\n  const offset = 256; // uniformBindGroup offset must be 256-byte aligned\n  const uniformBufferSize = offset + matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup1 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup2 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: offset,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const modelMatrix1 = mat4.create();\n  mat4.translate(modelMatrix1, modelMatrix1, vec3.fromValues(-2, 0, 0));\n  const modelMatrix2 = mat4.create();\n  mat4.translate(modelMatrix2, modelMatrix2, vec3.fromValues(2, 0, 0));\n  const modelViewProjectionMatrix1 = mat4.create() as Float32Array;\n  const modelViewProjectionMatrix2 = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -7));\n\n  const tmpMat41 = mat4.create();\n  const tmpMat42 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    mat4.rotate(\n      tmpMat41,\n      modelMatrix1,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n    mat4.rotate(\n      tmpMat42,\n      modelMatrix2,\n      1,\n      vec3.fromValues(Math.cos(now), Math.sin(now), 0)\n    );\n\n    mat4.multiply(modelViewProjectionMatrix1, viewMatrix, tmpMat41);\n    mat4.multiply(\n      modelViewProjectionMatrix1,\n      projectionMatrix,\n      modelViewProjectionMatrix1\n    );\n    mat4.multiply(modelViewProjectionMatrix2, viewMatrix, tmpMat42);\n    mat4.multiply(\n      modelViewProjectionMatrix2,\n      projectionMatrix,\n      modelViewProjectionMatrix2\n    );\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix1.buffer,\n      modelViewProjectionMatrix1.byteOffset,\n      modelViewProjectionMatrix1.byteLength\n    );\n    device.queue.writeBuffer(\n      uniformBuffer,\n      offset,\n      modelViewProjectionMatrix2.buffer,\n      modelViewProjectionMatrix2.byteOffset,\n      modelViewProjectionMatrix2.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    // Bind the bind group (with the transformation matrix) for\n    // each cube, and draw.\n    passEncoder.setBindGroup(0, uniformBindGroup1);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.setBindGroup(0, uniformBindGroup2);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TwoCubes: () => JSX.Element = () =>\n  makeSample({\n    name: 'Two Cubes',\n    description:\n      'This example shows some of the alignment requirements \\\n       involved when updating and binding multiple slices of a \\\n       uniform buffer. It renders two rotating cubes which have transform \\\n       matrices at different offsets in a uniform buffer.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TwoCubes;\n"},{name:"../../shaders/basic.vert.wgsl",contents:c.Z,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:l.Z,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:r});n.default=f},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},1945:function(e,n){"use strict";n.Z="@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragPosition;\n}\n"}}]);