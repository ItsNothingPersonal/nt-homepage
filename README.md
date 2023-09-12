# NT-Homepage

Die Codebase der Homepage des [Nächlichen Theaters](https://www.naechtlichestheater.de)

## Entwicklung

Um die Anwendung lokal zu starten werden die folgenden Tools benötigt:

- Node (für die Anwendung)
- Docker (für CMS & Datenbank)
- env-File

### Env File

Das .env File benötigt folgende Schlüssel. Der Directus User muss in Directus bereits existieren, der Rest wird automatisch angelegt, wenn die Docker-Container erzeugt werden.

```text
VITE_DIRECTUS_URL=http://localhost:<DIRECTUS_PORT>
VITE_DIRECTUS_USER=<Ein in Directus existierender User>
VITE_DIRECTUS_PW=<Passwort des Users>

POSTGRES_USER=<Name für einen User in Postgres>
POSTGRES_PASSWORD=<Das zu verwendende Passwort für den Postgres User>
POSTGRES_DB=<Name der Postgres Datenbank>
KEY=<Random UUID>
SECRET=<Random UUID>

DB_CLIENT=pg
DB_HOST=database
DB_PORT=<Port innerhalb des Containers z.B. 5432>
DB_PORT_HOST=<Port auf dem Hostsystem z.B. 5444>

ADMIN_EMAIL=<EMail für den initialen Directus-Admin-Account>
ADMIN_PASSWORD=<Passwort für den Admin-Account>
DIRECTUS_PORT=<Port für Directus z.B. 8055>

CORS_ENABLED=true

PUBLIC_URL=/
```

### Start der Anwendung

Um die Anwendung selbst zu starten

```bash
# Abhängigkeiten installieren
pnpm install

# Start der Anwendung im Dev-Modus
pnpm dev
```

### Start des CMS + Datenbank

Um das CMS und die Datenbank in Docker zu starten

```bash
docker compose -f ./docker-compose.yml up
```

## Bauen der Anwendung

Um eine Produktionsversion der Anwendung zu erstellen

```bash
pnpm build
```

Die erzeugte Anwendung kann mit `pnpm preview` lokal gestartet werden.

## Anerkennung

Ohne die folgenden Projekte wäre dieses hier nicht möglich:

- [svelte](https://svelte.dev/) & [sveltekit](https://kit.svelte.dev/)
- [flowbite-svelte](https://flowbite-svelte.com/)
- [directus](https://directus.io/)
