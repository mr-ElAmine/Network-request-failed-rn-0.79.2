## Problème connu : échec des requêtes réseau après un rechargement

Lors de la première installation et ouverture de l'application, les appels HTTP et HTTPS fonctionnent normalement.
Après avoir rechargé l'application (par exemple en utilisant l'option *Reload* du menu développeur), toutes les requêtes réseau retournent l'erreur `Network request failed`.
La réinstallation de l'application rétablit temporairement le fonctionnement, mais le problème revient au prochain rechargement.
