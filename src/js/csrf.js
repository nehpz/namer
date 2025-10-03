export function getToken () {
  const meta = document.querySelector('meta[name="csrf-token"]')
  return meta ? meta.getAttribute('content') : null
}

export function updateToken (token) {
  if (!token) {
    return
  }

  let meta = document.querySelector('meta[name="csrf-token"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'csrf-token')
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', token)
}