'use client'

import { useAuth } from '@clerk/nextjs'
import ContentForm from '@/components/Admin/ContentForm'
import Link from 'next/link'
import styles from '../admin.module.css'

export default function CreateContentPage() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <p>Cargando...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className={styles.adminLayout}>
        <div className={styles.formPage}>
          <div className={styles.emptyState}>
            <h3>Acceso Denegado</h3>
            <p>Debes iniciar sesion para acceder a esta pagina.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.adminLayout}>
      <div className={styles.formPage}>
        <Link href="/gestion-contenido" className={styles.backLink}>
          ← Volver al panel
        </Link>
        <h2>Crear Nuevo Contenido</h2>
        <ContentForm mode="create" />
      </div>
    </div>
  )
}
