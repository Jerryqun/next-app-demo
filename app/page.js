// app/page.js
export const runtime = 'edge'; // 'nodejs' (default) | 'edge'
import dynamic from 'next/dynamic';

// 使用 dynamic 函数动态导入 MyComponent
const MyComponent = dynamic(() => import('./components/hello.js'), {
  ssr: true, // 可以选择禁用 SSR
  loading: () => <p>Loading...</p>, // 可选的 loading 组件
});

const Page = () => (
  <div>
    <h1>My Page</h1>
    <MyComponent />
  </div>
);

export default Page;
