# Luna, mi cachorrita

Juego para peques: cría a Luna desde cachorrita, pasea con ella por el pueblo, juega minijuegos y cuídala día a día (1 día real = 1 semana de Luna).

- **Jugar en 3D:** abre `3d/index.html` (en GitHub Pages: `/3d/`).
- **Versión 2D:** `index.html`.

Funciona en PC y en tablets (joystick y botón A en pantalla). El progreso se guarda en el navegador de cada aparato. En tablets y móviles la versión 3D usa un modo ligero (sin sombras); `?hd=1` lo desactiva y `?lite=1` lo fuerza.

**Partidas en la nube:** con el botón ☁️ de cada partida se crea un usuario + PIN (sin email). En otro aparato, «☁️ Entrar» con ese usuario y PIN descarga la partida, y desde ahí se sincroniza sola (`js/cloud.js`, proyecto Supabase `luna-cachorrita`). La partida más reciente en la nube gana si se juega en dos aparatos a la vez. 5 PIN fallidos bloquean la cuenta 10 minutos. Un PIN olvidado no se puede recuperar desde el juego.

**Pueblo 3D ampliado:** perros con indicador de carácter (💚 amistoso, 💛 tímido, ⚠️ enojón con círculo rojo de peligro), algunos con dueño (hay que preguntarle antes de saludar) y otros sueltos; parque para perros (jugar con amigos, disco, agua); peluquería canina, heladería, pastelería, biblioteca (datos y preguntas sobre perros) y refugio. **Valle Aventura** (sureste): el guardabosques da misiones tipo RPG (setas, plumas, cristal, llave y cofre, mirador, amigos perrunos) con rango de explorador; al terminar la historia hay misiones nuevas cada día. Pío siempre tiene una sugerencia: si no queda nada pendiente, propone explorar el valle.

Código 3D en `3d/src/main3d.js`; `3d/luna3d.js` es el paquete generado con esbuild (incluye three.js r187, MIT). Créditos de sonidos en `CREDITOS.txt`.
