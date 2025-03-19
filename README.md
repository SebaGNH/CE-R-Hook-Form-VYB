# React + TypeScript + Vite         ```javascript ```
touch README.md <-- creamos el archivo


# Instalar React Hook Form
yarn add react-hook-form

# Instalar Devtools
yarn add -D @hookform/devtools



 ```javascript
const { name, ref, onChange, onBlur } = register('username');

<label htmlFor='username' className="prueba">Username</label>
<input
  type='text'
  autoComplete="off"
  id='username'
  name={name}
  ref={ref}
  onChange={onChange}
  onBlur={onBlur}
/>


 // es lo mismo que arriba, pero simplificado
// {...register('username')}  devuelve un objeto con name, ref, onChange, y onBlur.
<input
  type='text'
  autoComplete="off"
  id='username'
  {...register('username')}
/>
/>
```








/*   width: 100vw;
  height: 100vh;
  position: relative;
  max-width: 1920px;
  max-height: 1080px;
  aspect-ratio: 16/9;
  margin-block: 0;
  margin-inline: auto;
  overflow: hidden; */

