(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return d}});var r=t(5893),a=t(9008),o=t.n(a),i=t(1163),s=t(7294),c=t(9147),l=t.n(c);t(2684),t(7319);let u=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let o=t(4631);n=o(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),u=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),d=(0,i.useRouter)(),p=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[f,m]=(0,s.useState)(null),[h,v]=(0,s.useState)(null);return(0,s.useEffect)(()=>{p?v(p[1]):v(a[0].name),u&&c.current&&c.current.appendChild(u.domElement);let t={active:!0},r=()=>{t.active=!1};try{let o=n.current,i=e.init({canvas:o,pageState:t,gui:u});i instanceof Promise&&i.catch(e=>{console.error(e),m(e)})}catch(s){console.error(s),m(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("teoxoy/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(f)})]}):null]}),(0,r.jsxs)("div",{className:l().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:l().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":h==e.name,onClick(){v(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":h==e.name},n))]})]})},d=e=>(0,r.jsx)(u,{...e})},2684:function(){if("end"in GPURenderPassEncoder.prototype||(GPURenderPassEncoder.prototype.end=GPURenderPassEncoder.prototype.endPass),"end"in GPUComputePassEncoder.prototype||(GPUComputePassEncoder.prototype.end=GPUComputePassEncoder.prototype.endPass),navigator.userAgent.indexOf("Firefox")>0){let e={info:{icon:"ℹ️",logFn:console.info},warning:{icon:"⚠️",logFn:console.warn},error:{icon:"⛔",logFn:console.error}},n=GPUDevice.prototype.createShaderModule;function t(e){let n=GPUDevice.prototype[e];GPUDevice.prototype[e]=function(e){return"auto"==e.layout&&delete e.layout,n.call(this,e)}}GPUDevice.prototype.createShaderModule=function(t){t.code=t.code.replaceAll("vec4f","vec4<f32>").replaceAll("vec3f","vec3<f32>").replaceAll("vec2f","vec2<f32>").replaceAll("vec4u","vec4<u32>").replaceAll("vec3u","vec3<u32>").replaceAll("vec2u","vec2<u32>").replaceAll("mat4x4f","mat4x4<f32>");let r=n.call(this,t);return r.compilationInfo().then(n=>{if(!n.messages.length)return;let t={error:0,warning:0,info:0};for(let a of n.messages)t[a.type]+=1;0==t.error&&validationError&&(t.error=1);let o=r.label,i=(o?'"'.concat(o,'"'):"Shader")+" returned compilation messages:";for(let s in t)t[s]>0&&(i+=" ".concat(t[s]).concat(e[s].icon));for(let c of(0==t.error?console.groupCollapsed(i):console.group(i),n.messages)){let l=c.type;e[l].logFn(c.message)}console.groupEnd()}),r},t("createRenderPipeline"),t("createRenderPipelineAsync"),t("createComputePipeline"),t("createComputePipelineAsync");let r=GPUCommandEncoder.prototype.beginRenderPass;GPUCommandEncoder.prototype.beginRenderPass=function(e){if(e.colorAttachments)for(let n of e.colorAttachments)"clear"==n.loadOp?n.loadValue=n.clearValue||[0,0,0,0]:n.loadValue="load";if(e.depthStencilAttachment){let t=e.depthStencilAttachment;"load"==t.depthLoadOp?t.depthLoadValue="load":t.depthLoadValue=t.depthClearValue||1,t.depthStoreOp||(t.depthStoreOp="discard"),"load"==t.stencilClearValue?t.stencilLoadValue="load":t.stencilLoadValue=t.stencilClearValue||0,t.stencilStoreOp||(t.stencilStoreOp="discard")}return r.call(this,e)};let a=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r=a.apply(this,n);return"webgpu"==n[0]&&(r.canvas=this),r};let o={},i=GPUCanvasContext.prototype.configure;GPUCanvasContext.prototype.configure=function(e){let n=this;o[n]||(o[n]=new MutationObserver(function(t){let r=!1;for(let a of t)("width"==a.attributeName||"height"==a.attributeName)&&(r=!0);r&&i.call(n,e)})),o[n].observe(n.canvas,{attributes:!0}),i.call(n,e)};let s=GPUCanvasContext.prototype.unconfigure;GPUCanvasContext.prototype.unconfigure=function(e){o[this]&&o[this].disconnect(),s.call(this,e)},GPU.prototype.getPreferredCanvasFormat=function(){return"bgra8unorm"}}},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return o},MO:function(){return i},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,o=32,i=36,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},8621:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(5975),a=t(7160),o=t(5671),i=t(4655),s="struct Uniforms {\n  modelViewProjectionMatrix : array<mat4x4<f32>, 16>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @builtin(instance_index) instanceIdx : u32,\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0));\n  return output;\n}\n",c=t(1945),l="src/sample/instancedCube/main.ts";let u=async e=>{let{canvas:n,pageState:t}=e,o=await navigator.gpu.requestAdapter(),l=await o.requestDevice();if(!t.active)return;let u=n.getContext("webgpu"),d=window.devicePixelRatio||1;n.width=n.clientWidth*d,n.height=n.clientHeight*d;let p=navigator.gpu.getPreferredCanvasFormat();u.configure({device:l,format:p,alphaMode:"opaque"});let f=l.createBuffer({size:i.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(f.getMappedRange()).set(i.zS),f.unmap();let m=l.createRenderPipeline({layout:"auto",vertex:{module:l.createShaderModule({code:s}),entryPoint:"main",buffers:[{arrayStride:i.O$,attributes:[{shaderLocation:0,offset:i.v8,format:"float32x4"},{shaderLocation:1,offset:i.Ax,format:"float32x2"}]}]},fragment:{module:l.createShaderModule({code:c.Z}),entryPoint:"main",targets:[{format:p}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),h=l.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),v=l.createBuffer({size:1024,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g=l.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:v}}]}),x=n.width/n.height,b=r.Ue();r.G3(b,2*Math.PI/5,x,1,100);let y=Array(16),C=new Float32Array(256),P=0;for(let w=0;w<4;w++)for(let M=0;M<4;M++)y[P]=r.Ue(),r.Iu(y[P],y[P],a.al(4*(w-2+.5),4*(M-2+.5),0)),P++;let S=r.Ue();r.Iu(S,S,a.al(0,0,-12));let U=r.Ue(),A={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:h.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};requestAnimationFrame(function e(){if(!t.active)return;!function(){let e=Date.now()/1e3,n=0,t=0;for(let o=0;o<4;o++)for(let i=0;i<4;i++)r.U1(U,y[t],1,a.al(Math.sin((o+.5)*e),Math.cos((i+.5)*e),0)),r.Jp(U,S,U),r.Jp(U,b,U),C.set(U,n),t++,n+=16}(),l.queue.writeBuffer(v,0,C.buffer,C.byteOffset,C.byteLength),A.colorAttachments[0].view=u.getCurrentTexture().createView();let n=l.createCommandEncoder(),o=n.beginRenderPass(A);o.setPipeline(m),o.setBindGroup(0,g),o.setVertexBuffer(0,f),o.draw(i.MO,16,0,0),o.end(),l.queue.submit([n.finish()]),requestAnimationFrame(e)})},d=()=>(0,o.T)({name:"Instanced Cube",description:"This example shows the use of instancing.",init:u,sources:[{name:l.substring(25),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport instancedVertWGSL from './instanced.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'opaque',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: instancedVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const xCount = 4;\n  const yCount = 4;\n  const numInstances = xCount * yCount;\n  const matrixFloatCount = 16; // 4x4 matrix\n  const matrixSize = 4 * matrixFloatCount;\n  const uniformBufferSize = numInstances * matrixSize;\n\n  // Allocate a buffer large enough to hold transforms for every\n  // instance.\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const modelMatrices = new Array(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  const step = 4.0;\n\n  // Initialize the matrix data for every instance.\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      modelMatrices[m] = mat4.create();\n      mat4.translate(\n        modelMatrices[m],\n        modelMatrices[m],\n        vec3.fromValues(\n          step * (x - xCount / 2 + 0.5),\n          step * (y - yCount / 2 + 0.5),\n          0\n        )\n      );\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -12));\n\n  const tmpMat4 = mat4.create();\n\n  // Update the transformation matrix data for each instance.\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    let m = 0,\n      i = 0;\n    for (let x = 0; x < xCount; x++) {\n      for (let y = 0; y < yCount; y++) {\n        mat4.rotate(\n          tmpMat4,\n          modelMatrices[i],\n          1,\n          vec3.fromValues(\n            Math.sin((x + 0.5) * now),\n            Math.cos((y + 0.5) * now),\n            0\n          )\n        );\n\n        mat4.multiply(tmpMat4, viewMatrix, tmpMat4);\n        mat4.multiply(tmpMat4, projectionMatrix, tmpMat4);\n\n        mvpMatricesData.set(tmpMat4, m);\n\n        i++;\n        m += matrixFloatCount;\n      }\n    }\n  }\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    // Update the matrix data.\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, numInstances, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst InstancedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Instanced Cube',\n    description: 'This example shows the use of instancing.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/instanced.vert.wgsl',\n        contents: instancedVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default InstancedCube;\n"},{name:"../../shaders/instanced.vert.wgsl",contents:s,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:c.Z,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:l});var p=d},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},1945:function(e,n){"use strict";n.Z="@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragPosition;\n}\n"}}]);