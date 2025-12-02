#!/bin/bash

# --- CONFIGURATION ---
# IMPORTANT: Remplacez les valeurs ci-dessous par les vôtres.
PROJECT_ID="studio-7896272048-8c645"
REGION="us-central1" # ou une autre région comme "europe-west1"
SERVICE_NAME="euroforma-rdc-web"

# --- DEBUT DU SCRIPT ---
echo "Début du déploiement sur Cloud Run..."
echo "------------------------------------"

# Étape 1: Définir le projet et la région pour gcloud
echo "Configuration de gcloud pour le projet: $PROJECT_ID et la région: $REGION"
gcloud config set project "$PROJECT_ID"
gcloud config set run/region "$REGION"

# Vérification pour s'assurer que la configuration a fonctionné
echo "Configuration actuelle de gcloud :"
gcloud config list project
gcloud config list run/region
echo "------------------------------------"

# Étape 2: Déployer sur Cloud Run
# Cette commande va automatiquement :
# 1. Construire une image Docker de votre application en utilisant le Dockerfile.
# 2. Pousser cette image vers Google Artifact Registry.
# 3. Déployer l'image en tant que nouveau service sur Cloud Run.
# L'option --allow-unauthenticated rend le service accessible publiquement sur internet.
echo "Lancement du build et du déploiement..."
gcloud run deploy "$SERVICE_NAME" --source . --allow-unauthenticated

# Fin du script
echo "------------------------------------"
echo "Déploiement terminé."
echo "Si tout s'est bien passé, l'URL de votre service s'affichera ci-dessus."
