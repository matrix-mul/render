# Notes

1. Bundle bloating due to side-effects leaking, even after tree-shaking.
2. Increased build times due to barrel files.
3. Uglification & Minimization are defaults in SWC.
4. Rules, Plugins in ESLint.
5. Processors in ESLint, these are used to lint JS in files that are not standard .js files like JS code block written in .md file.
6. Globals are vars that exist in your environment but are not explicitly defined any where like 'window', etc.
7. If you are using custom globals then you can use global in languageOptions in eslint to mark the global var as readonly, writable etc.
8. Flat config in Eslint v9 now uses an array of objects, rather than using nested files and all, and the order matters in the array config the one near the bottom of the array is applied at the last..

Create columns: Todo, In Progress, Done . allow the functionality to Drag cards between columns to move the status if task is in progress or done . 
Persist data in localStorage
and user should be able to Add/edit/delete
and top of that Search and filter card based on priority.