# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar el juego de "Amigo Secreto". Permite agregar nombres de amigos, mostrar la lista y sortear aleatoriamente un amigo secreto.

## Instalación

1. **Descarga o clona el repositorio:**
   ```
   git clone https://github.com/JuanPatricioBof/challenge-amigo-secreto-alura.git
   ```
2. **Ubica los archivos:**
   - `index.html`: Página principal.
   - `app.js`: Lógica del juego.
   - `style.css`: Estilos visuales.
   - Carpeta `assets/`: Imágenes utilizadas.

No se requieren dependencias externas ni instalación de paquetes. Todo el código es JavaScript, HTML y CSS puro.

## Ejecución

1. Abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Edge, etc.).
2. Ingresa los nombres de los amigos en el campo de texto y haz clic en "Añadir".
3. Cuando todos los amigos estén agregados, haz clic en "Sortear amigo" para ver el resultado.

## Dependencias

- No hay dependencias externas.
- Se utiliza JavaScript básico para la lógica y manipulación del DOM.
- Las fuentes se cargan desde Google Fonts.

## Posibles problemas y soluciones

- **No se muestra la lista de amigos:**
  - Verifica que el archivo `app.js` esté correctamente enlazado en `index.html`.
  - Asegúrate de que el elemento `<ul id="listaAmigos">` exista en el HTML.
- **No se sortea el amigo secreto:**
  - Debes agregar al menos un nombre antes de sortear.
- **Problemas de visualización:**
  - Revisa que los archivos de imagen en la carpeta `assets/` estén presentes y correctamente referenciados.

## Autor

Desarrollado por Juan Patricio Bof para el Challenge de Alura.

## Licencia

Este proyecto es solo para fines educativos y personales.
