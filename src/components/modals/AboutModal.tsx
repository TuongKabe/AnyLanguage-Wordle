import { CONFIG } from '../../constants/config'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Về game" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Đây là phiên bản mã nguồn mở của tựa game Wordle xây dựng cho{' '}
        {CONFIG.language} bởi{' '}
        <a href={CONFIG.authorWebsite} className="underline font-bold">
          {CONFIG.author}
        </a>{' '}
        - hãy xem{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          mã nguồn gốc
        </a>{' '}
        bởi{' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
          Hannah Park
        </a>{' '}
        hoặc hãy xem{' '}
        <a
          href="https://github.com/roedoejet/AnyLanguage-Wordle"
          className="underline font-bold"
        >
          Aidan Pine's fork
        </a>{' '}
        và điều chỉnh nó cho ngôn ngữ khác! Những từ cho Wordle này được
        lấy từ{' '}
        <a href={CONFIG.wordListSourceLink} className="underline font-bold">
          {CONFIG.wordListSource}
        </a>
        . Ngoài ra,
        {' bạn cũng có thể chơi '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          tựa game gốc
        </a>
      </p>
    </BaseModal>
  )
}
