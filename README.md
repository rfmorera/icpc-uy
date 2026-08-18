# ICPC Uruguay — icpc.uy

Sitio estático de la comunidad de programación competitiva de Uruguay, con una sección
dedicada a **ICPC House**, la iniciativa impulsada por [Antigravity Capital](https://antigravity.capital)
para entrenar en convivencia a los mejores programadores del país hasta el 7 de noviembre,
con el objetivo de llevar al primer equipo uruguayo a una Final Mundial de ICPC.

No es un sitio oficial de ICPC Global — es un sitio de comunidad local, al estilo de
[icpc.ar](https://icpc.ar) en Argentina.

## Estructura

```
index.html      → toda la página (secciones con anclas: #inicio, #sobre-icpc, #icpc-house,
                   #resultados, #patrocinadores, #contacto)
css/style.css   → estilos
js/main.js      → menú móvil + resaltado de sección activa en el nav
assets/         → favicon (sol, estilo Sol de Mayo)
CNAME           → dominio personalizado para GitHub Pages (icpc.uy)
```

Es HTML/CSS/JS plano, sin build ni dependencias. Cualquier cambio de contenido es editar
`index.html` directamente (podés pedírselo a Claude) y hacer commit + push.

## Por qué GitHub Pages (hosting fácil, gratis, integrado con Claude)

Para un sitio estático como este, la opción más simple es **GitHub Pages**:

- **Gratis** y sin límites prácticos para un sitio de este tamaño.
- **Se integra directo con este repo**: cada `git push` a la rama configurada
  redespliega el sitio automáticamente, sin pipelines que mantener.
- **Claude ya trabaja con este repo**: para futuros cambios, solo hay que pedirle que edite
  los archivos y haga push — no hace falta subir nada a mano ni tocar un panel externo.
- **Dominio propio gratis**: soporta dominio personalizado (`icpc.uy`) con HTTPS automático
  (certificado Let's Encrypt gestionado por GitHub).

Alternativas igual de válidas si en algún momento se necesita más (formularios, funciones
serverless, previews por PR): **Cloudflare Pages** o **Netlify**, ambas con plan gratis y
conexión directa a este repo de GitHub. La configuración de dominio es equivalente a la de
más abajo, cambiando los registros DNS por los que indique cada proveedor.

## Publicar el sitio (GitHub Pages)

1. En GitHub, entrá al repo → **Settings → Pages**.
2. En **Build and deployment → Source**, elegí **Deploy from a branch**.
3. Elegí la rama con el sitio (`main`, luego de mergear este PR) y carpeta **/ (root)**.
4. Guardá. GitHub va a publicar el sitio en `https://rfmorera.github.io/icpc-uy/` en un par
   de minutos.

El archivo `CNAME` en la raíz ya le indica a GitHub Pages que el dominio final es `icpc.uy`,
así que en el mismo paso 3, en el campo **Custom domain**, va a aparecer `icpc.uy` — solo
falta apuntar el DNS (siguiente sección) para que resuelva.

## Vincular el dominio icpc.uy

Esto se hace en el proveedor donde está registrado `icpc.uy` (o donde tengas delegado el DNS,
por ejemplo si lo pasaste a Cloudflare).

### 1. Registros DNS

Para que `icpc.uy` (dominio raíz / apex) apunte a GitHub Pages, creá **4 registros A**
apuntando a las IPs de GitHub Pages:

| Tipo | Nombre / Host | Valor           |
|------|---------------|-----------------|
| A    | @ (o icpc.uy) | 185.199.108.153 |
| A    | @ (o icpc.uy) | 185.199.109.153 |
| A    | @ (o icpc.uy) | 185.199.110.153 |
| A    | @ (o icpc.uy) | 185.199.111.153 |

Opcional, si además querés que `www.icpc.uy` funcione:

| Tipo  | Nombre / Host | Valor                    |
|-------|---------------|--------------------------|
| CNAME | www           | rfmorera.github.io.      |

(Si tu proveedor soporta `ALIAS`/`ANAME` en la raíz, también podés usar
`rfmorera.github.io` en vez de los 4 registros A. Si usás Cloudflare, apagá el proxy
naranja — dejalo en "DNS only" — mientras se valida el dominio en GitHub.)

### 2. Confirmar el dominio en GitHub

1. Repo → **Settings → Pages → Custom domain** → escribí `icpc.uy` → **Save**
   (si el `CNAME` ya está en el repo, probablemente ya aparezca solo).
2. Esperá a que el DNS propague (de minutos a un par de horas) y a que GitHub muestre
   **DNS check successful**.
3. Tildá **Enforce HTTPS** para que el sitio quede solo en `https://icpc.uy`.

### 3. Verificar

- `https://icpc.uy` → debe cargar el sitio.
- `https://www.icpc.uy` → si configuraste el CNAME de `www`, debe redirigir al dominio raíz.

## Próximos pasos de contenido sugeridos

- Reemplazar `hola@icpc.uy` por una casilla real (podés crear un alias de correo sobre el
  mismo dominio con cualquier proveedor de email, o redirigirlo a un Gmail existente).
- Cargar los logos reales de sponsors en `assets/` y reemplazar los "Tu empresa acá".
- Sumar un formulario real de postulación a ICPC House (Google Forms/Tally es la opción más
  rápida sin backend; se linkea desde los botones "Quiero postularme" / "Sumate al equipo").
- Confirmar la fecha exacta de la Regional Latinoamericana 2026 y ajustar el texto de
  "hasta el 7 de noviembre" si cambia.
