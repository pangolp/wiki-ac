---
prev: false
next: false
---

# Guía Paso a Paso: Cómo contribuir a AzerothCore

> Vamos a tomar como ejemplo, la wiki, pero sirve para cualquier otro proyecto open source.

## 1. Crear un Fork del Repositorio

El "Fork" es una copia exacta del repositorio original que se creara en tu propia de GitHub.

Esto te permite hacer cambios sin afectar el proyecto principal directamente.

1. Ve a https://github.com/azerothcore/wiki.
2. En la esquina superior derecha, haz clic en el botón Fork.
3. Selecciona tu cuenta personal como destino.

Podria ser una organizacion tambien, la que hace el `fork`, pero por ahora, hablaremos de cuentas personales.

## 2. Clonar el Repositorio localmente

Ahora necesitas descargar tu copia (el `fork`) a tu computadora para poder trabajar en ella. Abre una terminal y ejecuta el siguiente comando (reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub): A modo de ejemplo, yo donde dice `TU_USUARIO` usare el mio, que es `pangolp`.

```sh
git clone https://github.com/TU_USUARIO/wiki.git
```

```sh
git clone https://github.com/pangolp/wiki.git
```

> Al momento de crear el `fork`, se puedo haber elegido otro nombre, dado que puede existir otro proyecto dentro del perfil del usuario, que ya tenga como nombre `wiki`. Tener en cuenta el nombre, para poder clonarlo de manera correcta en la pc de manera local, para poder realizar las modificaciones. En caso de llamarse exactamente igual que en el ejemplo, continuamos, si no, revisa y tener en cuenta los nombres elegidos.

Luego, entra en la carpeta que se acaba de crear:

```sh
cd wiki
```

Al ingresar a la carpeta, generalmente, dependiendo de la consola, se suele ver la rama del repositorio donde estas trabajando. Si el repositorio, fue clonado recientemente, y partió de la rama estable del mismo, la misma generalmente se llama por convención `main` o `master`. Puede tener otro nombre, porque depende de la comunidad que trabaje en ese código, pero el 99% de los repositorios, usara alguno de esos 2 nombres, para su versión estable.

Si estas sobre la rama `main` o `master` y la misma esta actualizada, vamos a crear una nueva rama, para poder realizar los cambios. Para saber en que rama estamos trabajando, se puede utilizar el comando `git branch` y la seleccionada, generalmente aparece con un `*`. Por otro lado, también tenemos que familiarizarnos con el uso del comando `git remote --v` el cual, nos ayudara a entender, que es `origin`. `origin` no es mas que una URL, que también se utiliza el nombre por convención, que apunta a la dirección de donde se clono el proyecto.

Voy a utilizar el comando `git remote --v` sobre el repositorio del emulador, no sobre la `wiki`, para que puedan ver que en mi caso, existen 2 remote, `origin`, que apunta a el `fork` que tuve que crear del emulador, y sobre el cual, voy a hacer cambios, para luego, compartirlo con la comunidad, y que la misma, los revise y finalmente, puede que termine aprobando o no, y `upstream`, que mas adelante hablaremos de el, pero que lo necesitamos, para mantener nuestra rama actualizada, y el master local y remoto también, a partir de los cambios, que otros contribuidores realizan, ademas de los nuestros.

```sh
Walter@DESKTOP-VDCIP76 MINGW64 /w/wotlk/azerothcore (master)
$ git remote --v
origin  git@github.com:pangolp/azerothcore-wotlk.git (fetch)
origin  git@github.com:pangolp/azerothcore-wotlk.git (push)
upstream        git@github.com:azerothcore/azerothcore-wotlk.git (fetch)
upstream        git@github.com:azerothcore/azerothcore-wotlk.git (push)

```

## 3. Crear una Rama (Branch)

Es una buena práctica no trabajar sobre la rama principal (`master` o `main`). Crear una rama te permite organizar tus cambios.

```sh
git checkout -b mi-primera-contribucion
```

> Esto crea una rama llamada "mi-primera-contribucion" y te cambia a ella automáticamente.

## 4. Realizar los cambios

Ahora, abre los archivos del repositorio con tu editor de texto favorito (como VS Code) y realiza las modificaciones o añadidos que desees en la Wiki. Una vez que hayas terminado, verifica qué archivos has modificado:

```sh
git status
```

## 5. Guardar y Subir los cambios

Para que git sepa de tus cambios, primero debes "prepararlos" y luego hacer un "comentario" (commit) explicando qué hiciste.

1. Añadir los archivos:

```sh
git add .
```

2.  Crear el commit:

```sh
git commit -m "Descripción breve de los cambios realizados"
```

3. Subir la rama a tu GitHub:

```sh
git push origin mi-primera-contribucion
```

## 6. Crear el Pull Request (PR)

Ahora que tus cambios están en tu cuenta de GitHub, es momento de pedirle a los administradores de AzerothCore que los revisen e integren.

1. Ve a tu repositorio en GitHub (el fork).
2. Verás un mensaje amarillo que dice "Compare & pull request". Haz clic ahí.
3. Asegúrate de que la base sea azerothcore/wiki y el "head repository" sea el tuyo con la rama que creaste.
4. Escribe un título claro y una descripción de lo que cambiaste.
5. Completa todos los todos que te piden (en caso de hacerlo, a veces, las comunidades tienen template con preguntas).
6. Haz clic en Create pull request.

## 7. Revisión y Feedback

Una vez abierto el PR, los mantenedores del proyecto revisarán tu trabajo.

- Si te piden cambios: No necesitas cerrar el PR. Simplemente haz los cambios en tu computadora, repite los pasos de `git add`, `git commit` y `git push`. El PR se actualizará automáticamente. No es necesario crear otro PR, mientras estés en la rama creada anteriormente: `mi-primera-contribucion`, todas las modificaciones, se subirán dentro de esa rama, y al hacer un push, se irán añadiendo al pull request (en pocas palabras, el PR se crea 1 sola vez, y luego hay un ecosistema, donde la gente puede sugerir cambios, o simplemente, esperar retroalimentación de otras personas).
- Si todo está correcto: Un administrador aprobará tu PR y verás un mensaje de "Merged", lo que significa que tus cambios ya son parte oficial de la Wiki.

## 8. Limpieza (Eliminar la rama)

Una vez que tus cambios han sido aceptados (Merged), es recomendable borrar la rama para mantener el orden.

1. Eliminar la rama localmente:

```sh
git checkout master
git pull upstream master
git branch -D mi-primera-contribucion
```

Podes ejecutar los 3 comandos al mismo tiempo, de la siguiente forma:

```sh
git checkout master && git pull upstream master && git branch -D mi-primera-contribucion
```

2. Eliminar la rama remota (en GitHub):

```sh
git push origin :mi-primera-contribucion
```

### ¡Felicidades! Has completado tu primera contribución a la Wiki de AzerothCore.

## Bonus

¿Que se upstream?

`upstream` es otra palabra, que se utiliza habitualmente, para apuntar a la URL del repositorio padre de donde hicimos el clone. Se puede añadir con el comando `git remote add`, y se realizaria de siguiente forma:

```sh
git remote add upstream https://github.com/azerothcore/wiki
```

De esa forma, origin, apunta a nuestra copia del repositorio, y upstream, apunta al repositorio al que queremos hacerle el reporte.

Podemos ver eso, utilizando el comando `git remote --v`.
