# sitio-de-donaciones-entrega-final
# TRIDON - Proyecto de Donación

TRIDON es un sistema de donaciones donde los usuarios pueden contribuir con dinero o artículos como ropa, alimentos no perecederos, medicamentos y más. El objetivo de TRIDON es mejorar la calidad de vida de las comunidades necesitadas a través de estas donaciones.

# Descripción del Proyecto

Este proyecto consta de un sitio web interactivo para la recepción de donaciones. Los usuarios pueden registrar su nombre, correo electrónico, mensaje personal, y realizar una donación monetaria o de productos. A continuación, se presenta la estructura del proyecto:

- Formulario de donación: Permite que los usuarios registren su nombre, correo electrónico y la cantidad que desean donar. Además, pueden proporcionar un mensaje personal y describir los productos que desean donar.
- Sección informativa: Explica el objetivo de TRIDON y qué tipo de donaciones son aceptadas.
- Redes Sociales: Los usuarios pueden acceder a las redes sociales de TRIDON para más información y participación.

# Estructura del Proyecto

- `index.html`: Página principal con el formulario de donación y las secciones informativas.
- `css/style.css`: Archivo CSS con los estilos de la página.
- `js/app.js`: Archivo JavaScript para manejar la validación del formulario y la simulación del envío de los datos.
- `server/server.js`: Servidor Node.js que maneja las solicitudes de los usuarios (aunque no está completamente integrado en este caso).
- `assets/images/`: Carpeta que contiene las imágenes utilizadas en el sitio.

# Cómo usar el proyecto

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tuusuario/tridon-donation-project.git
    cd tridon-donation-project
    ```

2. Instala las dependencias del servidor (si deseas configurar el backend):
    ```bash
    cd server
    npm install
    ```

3. Ejecuta el servidor:
    Si has configurado un servidor, puedes iniciarlo con el siguiente comando:
    ```bash
    node server.js
    ```

4. Abre `index.html`:
    Abre el archivo `index.html` en tu navegador para ver la página y probar el formulario de donación.

# Contribuciones

Si deseas contribuir al proyecto, por favor realiza un fork de este repositorio y abre un pull request con tus cambios.

# Licencia

Este proyecto está bajo la licencia MIT.
