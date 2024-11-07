export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function removeVietnameseAccent(str: string): string {
  const from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i])
  }
  return str
}

export async function getPermissionCamera() {
  const res = await navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(() => {
      return true
    })
    .catch(() => {
      return false
    })
  return res
}
