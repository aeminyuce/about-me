#!/bin/bash
# Backup and restore DB for supabase

set -e
read -s -p "Enter Supabase DB password: " DB_PASSWORD
echo ""

CONN_STRING="postgresql://postgres.gllsrbnehuxttusfghrn:${DB_PASSWORD}@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"
BACKUP_FILE="./api/_backup.sql"

case "$1" in
  --backup)
    echo "Starting backup..."
    pg_dump --dbname="$CONN_STRING" --disable-triggers > "$BACKUP_FILE"
    echo "Backup complete: $BACKUP_FILE"
    ;;

  --restore)
    echo "Starting restore from $BACKUP_FILE ..."
    psql --dbname="$CONN_STRING" -f "$BACKUP_FILE"
    echo "Restore complete."
    ;;

  *)
    echo "Usage:"
    echo "  $0 --backup    # Create backup"
    echo "  $0 --restore   # Restore from backup"
    exit 1
    ;;
esac
