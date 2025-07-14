import React from 'react'

export const renderTextWithLineBreak = (text: string) => {
  return text.split(/\r?\n/).map((line, idx, lines) => (
    <React.Fragment key={idx}>
      {line} {idx + 1 < lines.length && <br data-testid="line-break" />}
    </React.Fragment>
  ))
}
