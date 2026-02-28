# ui-components - Claude Agent Workflow

## Project Info
- **GitHub Org:** avelezX
- **Repo:** ui-components
- **GitHub Project:** Xerenity (#4)
- **Description:** Librería de componentes UI compartidos

## Session Startup Protocol

**Al inicio de cada sesion, SIEMPRE ejecutar estos pasos antes de cualquier otra cosa:**

1. **Consultar GitHub Projects** - Listar las tareas pendientes del proyecto Xerenity:
   ```bash
   export PATH="$PATH:/c/Program Files/GitHub CLI"
   gh project item-list 4 --owner avelezX --format json
   ```

2. **Mostrar resumen al usuario** - Presentar tabla con:
   - Status (Todo, In Progress, Done)
   - Titulo
   - Repo asociado (filtrar las relevantes a este repo: ui-components)
   - Prioridad si la tiene
   Filtrar y mostrar primero las tareas "In Progress" y "Todo".

3. **Preguntar cual tarea trabajar** - Si el usuario no especifica, preguntar cual tarea del backlog quiere abordar.

## Repos del ecosistema Xerenity
- **xerenity-fe** - Frontend (React/TypeScript)
- **xerenity-dm** - Data management / collectors (Python)
- **xerenity-db** - Migraciones y esquema DB (SQL/Supabase)
- **xerenity-api** - API
- **pysdk** - Python SDK / pricing backend
- **XerenityAddin** - Excel Addin (C#)
- **xerenity-explorer** - Explorador de datos (Python/Jupyter)
- **ui-components** - Libreria de componentes UI (este repo)

## Workflow por Tarea

### 1. Crear branch
```bash
git checkout main && git pull
git checkout -b feature/<issue-number>-<short-description>
```

### 2. Trabajar en la tarea
- Leer y entender el codigo existente antes de modificar
- Hacer commits frecuentes con mensajes descriptivos
- Seguir las convenciones del proyecto existente

### 3. Al completar la tarea
- Crear un Pull Request con referencia al issue (`Closes #N`)
- Agregar issue al project si no esta:
  ```bash
  gh project item-add 4 --owner avelezX --url <issue-url>
  ```

### 4. Crear nuevas tareas si se descubren
```bash
gh issue create --repo avelezX/ui-components --title "..." --body "..."
gh project item-add 4 --owner avelezX --url <issue-url>
```

## Convenciones de Commits
```
<type>(<scope>): <description>

[optional body]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```
Tipos: feat, fix, docs, refactor, test, chore
