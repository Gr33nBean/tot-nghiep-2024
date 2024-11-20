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

export function generateRandomArray(start: number, end: number): number[] {
  const result: number[] = []
  let current = start
  const step = start < end ? 1 : -1
  result.push(current)
  while ((step > 0 && current < end) || (step < 0 && current > end)) {
    const randomStep = Math.random() * 5 + 1
    current = Math.min(end, current + step * randomStep)
    current = Math.max(end, current)
    result.push(Math.round(current * 100) / 100)
  }

  return result
}

export function randomNumber(numbers: number[]): number {
  const randomIndex = Math.floor(Math.random() * numbers.length)
  return numbers[randomIndex]
}
