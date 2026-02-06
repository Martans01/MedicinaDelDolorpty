import Link from 'next/link'
import styles from '@/app/blog/blog.module.css'

const CATEGORIES = [
  { value: 'all', label: 'Todos' },
  { value: 'espalda', label: 'Espalda' },
  { value: 'rodilla', label: 'Rodilla' },
  { value: 'cuello', label: 'Cuello' },
  { value: 'hernia', label: 'Hernia' },
  { value: 'general', label: 'General' },
]

interface CategoryFilterProps {
  active?: string
}

export default function CategoryFilter({ active = 'all' }: CategoryFilterProps) {
  return (
    <div className={styles.categoryFilter}>
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.value}
          href={cat.value === 'all' ? '/blog' : `/blog/categoria/${cat.value}`}
          className={`${styles.filterBtn} ${active === cat.value ? styles.filterBtnActive : ''}`}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  )
}
