import React from 'react'

type ImageProps = {
  mainColor: string
  minorColor: string
  minorColorTwo: string
}
const ProductImage: React.FC<ImageProps> = ({ mainColor, minorColor, minorColorTwo }) => {
  return (
    <div className=' hidden lg:flex flex-col justify-center items-center '>
      <svg
        width='496'
        height='420'
        viewBox='0 0 496 420'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M479.06 219.816C435.508 130.766 310.926 0.34889 149.056 0.000542435C-19.8615 -0.347805 -36.2022 167.184 54.8433 213.759C145.889 260.335 12.7644 318.383 107.927 376.699C204.245 435.728 410.095 430.186 460.763 384.268C511.432 338.349 497.878 258.285 479.06 219.816Z'
          fill='url(#paint0_linear_325_165)'
        />
        <path
          d='M68.4842 335.547C68.4842 335.547 89.86 311.748 87.5958 302.366C85.3315 292.985 98.5925 281.592 98.8538 267.928C99.1467 252.45 90.8813 256.59 88.0154 249.972C83.7719 240.163 93.2169 231.478 78.9425 227.725C69.1967 225.16 62.3168 230.163 63.2352 218.106C64.1536 206.048 59.7755 191.125 51.9851 185.71C40.8301 177.967 18.1321 177.365 25.7799 192.961C33.8156 209.358 26.7299 236.355 24.8615 243.749C5.06902 321.89 68.4842 335.547 68.4842 335.547Z'
          fill='url(#paint1_linear_325_165)'
        />
        <path
          d='M44.6621 201.781C47.1085 221.954 72.3716 254.192 60.9474 275.734C49.5231 297.276 66.8614 330.63 66.8614 330.63'
          stroke='url(#paint2_linear_325_165)'
          strokeWidth='0.93'
          strokeMiterlimit='10'
        />
        <path
          d='M133.309 290.475C119.423 295.384 134.457 313.347 119.272 321.439C104.087 329.53 84.6195 333.631 83.7249 329.704C83.6616 329.443 82.8461 326.838 81.9832 323.03C81.7852 322.151 81.5873 321.201 81.3894 320.203C81.3419 319.926 81.2865 319.641 81.2311 319.356C80.6639 316.318 80.2806 313.249 80.0831 310.165C80.0831 310.07 80.0831 309.975 80.0831 309.88C80.0118 308.653 79.9881 307.418 80.0118 306.19C80.0356 304.963 80.0989 303.815 80.2256 302.683C80.6769 298.313 81.9278 294.283 84.4849 291.394C85.1392 290.642 85.8837 289.975 86.7017 289.406C97.2551 282.067 101.467 285.63 101.388 274.784C101.245 256.195 106.542 253.408 112.772 255.252C119.003 257.097 123.856 257.628 124.782 250.732C125.709 243.836 120.032 213.237 134.22 213.292C158.762 213.372 146.34 244.659 143.862 249.711C137.925 261.879 150.275 263.787 153.212 272.67C156.15 281.553 147.188 285.567 133.309 290.475Z'
          fill='url(#paint3_linear_325_165)'
        />
        <path
          d='M81.0091 356.416C81.0091 356.416 77.2802 322.222 103.319 303.024C115.1 294.362 136.998 263.439 134.987 229.966'
          stroke='url(#paint4_linear_325_165)'
          strokeWidth='2.67'
          strokeMiterlimit='10'
        />
        <path
          d='M44.4481 261.261C47.6862 255.767 70.978 278.425 66.9007 283.429C62.8235 288.433 41.3605 266.479 44.4481 261.261Z'
          fill='url(#paint5_linear_325_165)'
        />
        <path
          d='M38.5739 292.138C39.041 285.741 67.1543 294.94 65.7134 301.258C64.2725 307.576 38.1306 298.242 38.5739 292.138Z'
          fill='url(#paint6_linear_325_165)'
        />
        <path
          d='M91.6408 263.914C96.6206 267.817 72.0383 288.987 67.6523 284.292C63.2663 279.597 86.8985 260.193 91.6408 263.914Z'
          fill='url(#paint7_linear_325_165)'
        />
        <path
          d='M89.0684 290.554C93.2565 295.305 69.5135 307.18 65.9508 301.82C62.3882 296.46 85.1099 286.081 89.0684 290.554Z'
          fill='url(#paint8_linear_325_165)'
        />
        <path
          d='M40.4339 315.145C39.2068 309.27 70.1939 312.651 70.4631 318.699C70.7323 324.748 41.6057 320.734 40.4339 315.145Z'
          fill='url(#paint9_linear_325_165)'
        />
        <path
          d='M87.5566 308.304C90.7709 313.735 68.5558 327.305 65.9828 321.375C63.4097 315.445 84.4927 303.126 87.5566 308.304Z'
          fill='url(#paint10_linear_325_165)'
        />
        <path
          d='M75.3084 234.827C81.5628 235.286 73.4717 266.803 67.2885 265.347C61.1053 263.89 69.3469 234.391 75.3084 234.827Z'
          fill='url(#paint11_linear_325_165)'
        />
        <path
          d='M46.7987 259.749C50.0368 254.255 73.3286 276.913 69.2513 281.917C65.1741 286.92 43.7111 264.982 46.7987 259.749Z'
          fill='url(#paint12_linear_325_165)'
        />
        <path
          d='M40.4415 290.839C40.9086 284.442 69.0219 293.642 67.581 299.96C66.1401 306.278 39.9823 296.928 40.4415 290.839Z'
          fill='url(#paint13_linear_325_165)'
        />
        <path
          d='M92.591 262.504C97.5708 266.408 72.9885 287.578 68.6025 282.883C64.2165 278.188 87.8487 258.791 92.591 262.504Z'
          fill='url(#paint14_linear_325_165)'
        />
        <path
          d='M80.7314 301.472C81.1669 297.181 82.3623 293.222 84.8245 290.388C87.7934 289.794 90.2873 289.913 91.3798 291.18C93.6995 293.761 87.3976 298.606 80.7314 301.472Z'
          fill='url(#paint15_linear_325_165)'
        />
        <path
          d='M90.2398 289.588C94.4279 294.339 70.6848 306.214 67.1222 300.854C63.5595 295.495 86.2496 285.076 90.2398 289.588Z'
          fill='url(#paint16_linear_325_165)'
        />
        <path
          d='M68.9588 257.913C68.9588 257.913 69.6713 274.285 67.5021 288.575C65.3328 302.865 70.8035 327.052 79.7101 334.779'
          stroke='url(#paint17_linear_325_165)'
          strokeWidth='1.55'
          strokeMiterlimit='10'
        />
        <path
          d='M40.4339 314.02C39.2068 308.146 70.1939 311.526 70.4631 317.575C70.7323 323.624 41.6057 319.618 40.4339 314.02Z'
          fill='url(#paint18_linear_325_165)'
        />
        <path
          d='M81.8642 318.676C81.8167 318.406 81.7692 318.121 81.7137 317.844C81.1698 314.86 80.8023 311.846 80.6133 308.819C80.6133 308.724 80.6133 308.629 80.6133 308.542C85.6722 305.739 91.0716 304.33 92.4888 306.753C94.2859 309.801 88.0948 315.398 81.8642 318.676Z'
          fill='url(#paint19_linear_325_165)'
        />
        <path
          d='M91.3477 304.425C94.562 309.856 72.3469 323.426 69.7738 317.496C67.2008 311.566 88.2759 299.263 91.3477 304.425Z'
          fill='url(#paint20_linear_325_165)'
        />
        <path
          d='M76.8201 234.415C83.0746 234.874 74.9834 266.392 68.8002 264.935C62.617 263.478 70.8586 233.979 76.8201 234.415Z'
          fill='url(#paint21_linear_325_165)'
        />
        <path
          d='M82.1873 385.653H62.941C58.7404 385.652 54.6829 384.127 51.5219 381.36C48.3609 378.594 46.3112 374.774 45.7532 370.611L41.003 335.159C40.9276 334.594 40.9735 334.019 41.1377 333.474C41.302 332.928 41.5807 332.424 41.9554 331.994C42.33 331.565 42.792 331.22 43.3104 330.984C43.8288 330.747 44.3917 330.624 44.9615 330.622H100.151C100.721 330.624 101.284 330.747 101.802 330.984C102.32 331.22 102.782 331.565 103.157 331.994C103.532 332.424 103.811 332.928 103.975 333.474C104.139 334.019 104.185 334.594 104.109 335.159L99.3592 370.611C98.8017 374.772 96.7542 378.589 93.5965 381.355C90.4388 384.121 86.3851 385.648 82.1873 385.653Z'
          fill='url(#paint22_linear_325_165)'
        />
        <path
          d='M303.897 25.4062H72.4116C67.4052 25.4062 63.3467 29.4647 63.3467 34.4711V187.744C63.3467 192.751 67.4052 196.809 72.4116 196.809H303.897C308.903 196.809 312.962 192.751 312.962 187.744V34.4711C312.962 29.4647 308.903 25.4062 303.897 25.4062Z'
          fill='#D4D4D4'
        />
        <path
          d='M300.444 32.7611H75.8625C72.8717 32.7611 70.4473 35.1855 70.4473 38.1763V184.047C70.4473 187.038 72.8717 189.462 75.8625 189.462H300.444C303.435 189.462 305.859 187.038 305.859 184.047V38.1763C305.859 35.1855 303.435 32.7611 300.444 32.7611Z'
          fill='white'
        />
        <path
          d='M327.932 362.29C327.24 362.285 326.557 362.132 325.93 361.84C325.302 361.549 324.745 361.126 324.294 360.601C323.844 360.076 323.512 359.46 323.32 358.795C323.128 358.131 323.081 357.433 323.181 356.748L334.59 272.147L343.995 273.232L332.714 358.142C332.373 360.525 327.932 362.29 327.932 362.29Z'
          fill='url(#paint23_linear_325_165)'
        />
        <path
          d='M324.781 336.465L329.009 344.121L338.375 350.193L342.309 349.663L347.614 337.787L346.03 332.38L339.301 329.213L324.781 336.465Z'
          fill='url(#paint24_linear_325_165)'
        />
        <path
          d='M377.167 93.9674C377.888 91.7348 378.3 85.8604 378.68 84.0236C375.711 84.4274 373.138 88.8609 373.138 91.5448C373.89 91.4419 376.336 93.4211 377.167 93.9674Z'
          fill='url(#paint25_linear_325_165)'
        />
        <path
          d='M336.91 233.995C328.993 235.341 306.279 239.268 300.358 246.662C295.797 252.363 292.441 269.075 284.452 288.694C282.133 282.867 279.187 272.298 277.715 266.764C275.664 259.053 273.756 241.865 291.269 237.408C302.828 234.462 328.162 233.425 336.91 233.995Z'
          fill={mainColor}
        />
        <path
          d='M323.095 233.449C323.095 233.449 303.62 235.42 294.768 246.219C287.841 254.674 281.61 280.413 281.61 280.413'
          stroke='#F3F6FD'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M412.287 356.075L400.578 269.867L408.495 266.7L421.74 354.421C422.287 357.54 419.888 358.11 417.521 358.538C415.153 358.965 412.873 359.258 412.287 356.075Z'
          fill='url(#paint26_linear_325_165)'
        />
        <path
          d='M381.719 366.407L371.704 268.133H381.474L391.425 365.71C391.647 368.743 389.335 368.624 387.055 368.964C384.522 369.344 381.996 369.835 381.719 366.407Z'
          fill='url(#paint27_linear_325_165)'
        />
        <path
          d='M417.972 256.685C415.906 271.957 393.429 274.103 367.303 274.95C366.512 275.346 337.646 275.172 324.203 270.643L324.67 167.231C324.67 158.523 328.399 144.09 341.145 143.876C362.521 143.52 402.225 140.258 417.766 145.064C421.321 157.826 423.91 171.918 417.988 208.78C414.591 229.871 418.97 249.386 417.972 256.685Z'
          fill='url(#paint28_linear_325_165)'
        />
        <path
          d='M412.082 151.476C416.832 165.727 416.231 173.961 409.905 196.975C399.367 235.333 416.666 255.023 380.113 274.364C402.281 273.097 416.215 269.685 417.972 256.685C418.97 249.354 414.592 229.871 417.972 208.772C422.335 181.624 430.473 159.441 419.651 146.33C416.658 142.704 410.499 146.663 412.082 151.476Z'
          fill='url(#paint29_linear_325_165)'
        />
        <path
          d='M280.581 348.396C274.398 346.108 266.132 341.271 266.132 341.271C266.132 341.271 255.84 352.354 254.692 353.439C258.5 354.943 256.585 365.948 259.736 367.69C262.886 369.431 271.223 361.894 275.237 362.813C275.601 359.282 279.496 350.312 280.581 348.396Z'
          fill='url(#paint30_linear_325_165)'
        />
        <path
          d='M341.383 330.527L324.758 338.587C322.691 337.003 321.591 333.203 320.142 330.955C317.529 326.909 314.735 327.527 310.388 321.169L299.542 302.691L322.422 267.92L337.187 307.972C338.454 311.226 337.979 320.148 337.979 320.148C339.119 322.784 344.067 329.49 341.383 330.527Z'
          fill={mainColor}
        />
        <path
          d='M417.972 182.836C412.391 183.778 395.163 186.074 389.772 183.675C390.334 189.011 390.912 198.472 390.912 198.472C390.912 198.472 344.867 194.078 327.576 200.665C327.576 200.103 327.576 199.438 327.615 198.709C327.829 192.55 328.843 181.45 328.843 181.45C328.843 181.45 320.506 179.867 318.044 177.357C317.88 177.195 317.737 177.015 317.616 176.819C317.996 173.652 321.812 160.391 328.843 149.529C334.796 140.369 343.204 136.173 358.46 134.043L378.609 132.642C378.609 132.642 398.662 130.52 407.902 140.622C417.141 150.724 417.972 182.836 417.972 182.836Z'
          fill={minorColorTwo}
        />
        <path
          d='M328.874 181.45C328.874 181.45 328.874 191.141 329.713 198.076C313.776 205.257 310.372 210.957 310.578 212.129L307.182 198.163L313.856 197.443L318.075 177.341C320.538 179.851 328.874 181.45 328.874 181.45Z'
          fill='url(#paint31_linear_325_165)'
        />
        <path
          d='M308.67 219.143H240.204L227.616 165.197C227.461 164.534 227.457 163.844 227.606 163.18C227.755 162.516 228.053 161.894 228.476 161.361C228.9 160.828 229.438 160.397 230.051 160.102C230.665 159.806 231.337 159.653 232.018 159.655H296.019L308.67 219.143Z'
          fill='url(#paint32_linear_325_165)'
        />
        <path
          d='M399.327 232.554C399.327 232.554 407.751 254.96 380.976 264.365C363.661 270.445 331.099 269.194 331.099 269.194L294.403 337.162C293.217 339.349 291.349 341.089 289.083 342.118L288.062 342.577C286.811 344.366 283.066 353.661 281.047 352.814L261.809 343.812C260.091 343.107 264.374 336.885 265.197 335.222C265.768 334.066 264.833 327.115 265.696 323.513C271.634 298.574 288.758 254.366 294.601 247.153C300.563 239.791 309.643 236.537 317.56 235.191C326.158 233.726 336.704 230.116 336.704 230.116L399.327 232.554Z'
          fill='url(#paint33_linear_325_165)'
        />
        <path
          d='M328.392 231.478C328.392 231.478 325.526 231.121 321.053 230.828'
          stroke='#17FF44'
          strokeWidth='1.95'
          strokeMiterlimit='10'
        />
        <path
          d='M367.113 143.251C364.824 143.692 362.454 143.366 360.368 142.324C358.283 141.283 356.599 139.582 355.578 137.487C355.578 137.487 355.182 136.759 354.66 133.529L354.43 132.096L354.216 130.773L353.947 129.19C353.191 129.286 352.429 129.336 351.667 129.341C345.69 129.341 335.92 126.965 331.653 117.916C328.668 111.583 330.267 105.178 329.769 101.291C329.27 97.4034 327.306 94.8699 325.992 90.6185C324.314 85.1795 325.58 77.8959 328.09 75.877C339.388 66.725 362.687 70.5252 362.687 70.5252C362.687 70.5252 370.604 72.8053 369.813 88.8055C370.509 88.188 369.449 91.6952 370.47 91.3389C372.607 90.6264 374.531 90.7056 375.956 91.5289C379.123 93.3103 379.851 98.6067 375.331 106.674C375.283 106.769 375.228 106.864 375.172 106.959C375.193 108.456 375.309 109.95 375.521 111.432C375.521 111.654 375.576 111.884 375.608 112.121C375.972 114.86 376.4 118.407 376.898 121.835C377.563 126.783 378.323 131.019 378.593 132.666C379.25 136.64 375.521 141.889 367.113 143.251Z'
          fill='url(#paint34_linear_325_165)'
        />
        <path
          d='M369.83 88.7817C370.622 72.7815 362.705 70.5014 362.705 70.5014C362.705 70.5014 339.405 66.7012 328.107 75.8533C326.334 77.2783 326.421 80.3422 326.342 82.9786C330.728 78.363 340.917 78.6242 348.826 77.7929C352.61 77.3971 351.462 81.6564 352.539 81.7039C360.694 79.0755 366.79 82.5352 366.853 94.5374L370.416 91.3231C369.537 91.4419 370.503 88.188 369.83 88.7817Z'
          fill='url(#paint35_linear_325_165)'
        />
        <path
          d='M445.397 376.462H452.237C454.288 376.462 455.95 375.345 455.95 373.96V230.29H441.7V373.96C441.684 375.345 443.346 376.462 445.397 376.462Z'
          fill='#D4D4D4'
        />
        <path
          d='M208.702 376.462H199.796C198.577 376.462 197.587 375.749 197.587 374.878V230.29H210.911V374.87C210.911 375.749 209.922 376.462 208.702 376.462Z'
          fill='#D4D4D4'
        />
        <path
          d='M396.961 226.506L329.936 219.143V196.975L404.664 203.222L396.961 226.506Z'
          fill='#8F8A4D'
        />
        <path
          d='M197.808 219.016H455.625C456.712 219.016 457.788 219.23 458.791 219.646C459.795 220.062 460.707 220.671 461.475 221.44C462.244 222.208 462.853 223.12 463.269 224.124C463.685 225.127 463.899 226.203 463.899 227.29V233.995H189.535V227.29C189.535 225.095 190.407 222.991 191.958 221.44C193.51 219.888 195.614 219.016 197.808 219.016Z'
          fill='url(#paint36_linear_325_165)'
        />
        <path
          d='M337.662 215.778L336.942 218.993H308.67L293.881 162.473C293.795 162.142 293.787 161.795 293.855 161.459C293.924 161.124 294.069 160.808 294.278 160.537C294.487 160.266 294.756 160.046 295.063 159.895C295.37 159.743 295.708 159.664 296.05 159.663C296.554 159.663 297.044 159.832 297.44 160.144C297.836 160.455 298.116 160.891 298.235 161.381L307.182 198.171L310.578 212.129C310.575 212.173 310.575 212.218 310.578 212.263V212.311H334.804C335.237 212.298 335.668 212.384 336.063 212.563C336.458 212.742 336.807 213.009 337.083 213.344C337.359 213.679 337.554 214.072 337.655 214.494C337.755 214.916 337.758 215.355 337.662 215.778Z'
          fill='url(#paint37_linear_325_165)'
        />
        <path
          d='M265.142 196.587C268.317 196.587 270.89 194.014 270.89 190.84C270.89 187.665 268.317 185.092 265.142 185.092C261.968 185.092 259.395 187.665 259.395 190.84C259.395 194.014 261.968 196.587 265.142 196.587Z'
          fill='white'
        />
        <path
          d='M389.82 183.39L387.943 172.544'
          stroke='white'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M328.875 181.45L330.545 172.544'
          stroke='white'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M379.02 83.0736C379.131 80.271 378.592 77.31 377.666 73.2803C375.671 64.5716 369.836 60.9535 360.708 59.3147L351.999 58.3013C351.207 58.2063 336.609 57.1454 329.832 61.1435C327.282 62.6398 323.933 66.2896 323.973 68.7201C324.076 74.927 323.973 78.2205 325.382 82.9707C328.359 70.2639 335.12 85.1399 351.041 72.1877C353.994 69.8126 353.678 76.0512 354.754 76.0987C363.962 73.1298 370.509 77.9117 368.807 93.9674C371.182 92.5502 372.765 91.0856 374.183 90.8956C375.964 88.6234 378.957 84.5461 379.02 83.0736Z'
          fill='#131B16'
        />
        <path
          d='M375.624 112.097C373.75 116.768 370.885 120.977 367.226 124.433C363.566 127.888 359.201 130.508 354.43 132.111L354.216 130.789L353.947 129.206C353.191 129.302 352.429 129.352 351.667 129.356C356.338 125.335 369.33 113.966 375.347 106.69C375.299 106.785 375.244 106.88 375.188 106.975C375.209 108.472 375.325 109.966 375.537 111.448C375.568 111.63 375.592 111.86 375.624 112.097Z'
          fill='url(#paint38_linear_325_165)'
        />
        <path
          d='M370.4 93.2469C370.685 92.9223 371.572 92.1227 371.572 92.1227L370.891 89.1618L366.711 91.9485C366.316 92.2121 366.003 92.581 365.807 93.0133C365.611 93.4457 365.54 93.9243 365.602 94.3949L367.004 104.917C361.208 108.471 348.003 118.684 345.501 119.096C342.334 119.626 341.273 115.668 339.563 116.586C337.853 117.505 338.107 119.888 336.919 119.888C336.301 119.888 332.256 117.354 330.926 115.652C330.926 115.652 332.984 122.366 333.428 123.569C334.449 126.3 340.41 131.826 340.41 131.826C340.712 132.127 341.079 132.355 341.482 132.492C341.886 132.629 342.315 132.672 342.738 132.618L350.219 131.716L353.98 129.38C359.221 126.364 371.35 114.488 371.397 112.865C371.659 103.373 367.55 96.4691 370.4 93.2469Z'
          fill='#131B16'
        />
        <path
          d='M371.704 96.1921C371.704 96.1921 373.39 93.0253 375.172 95.0045C376.953 96.9838 375.172 101.045 375.172 101.045L371.704 96.1921Z'
          fill='url(#paint39_linear_325_165)'
        />
        <path
          d='M416.666 183.073C416.594 189.858 416.096 205.241 413.19 211.812C409.406 220.37 404.22 220.259 390.049 217.876C375.877 215.493 352.411 207.054 345.112 207.054C337.812 207.054 333.236 212.334 333.236 212.334H310.459C310.253 211.163 310.34 205.13 327.639 198.701C330.537 197.474 338.889 196.461 346.125 195.938C365.997 194.505 390.46 198.131 390.46 198.131C390.46 198.131 390.365 189.003 389.803 183.667C395.123 186.05 411.725 183.817 416.666 183.073Z'
          fill='url(#paint40_linear_325_165)'
        />
        <path
          d='M370.312 199.446C370.312 199.446 377.549 198.852 377.549 204.916C377.549 210.981 370.312 211.044 370.312 211.044'
          stroke='#D6D9E8'
          strokeWidth='5.49'
          strokeMiterlimit='10'
        />
        <path
          d='M371.159 218.993H353.156L350.63 193.381C350.606 193.047 350.653 192.712 350.768 192.398C350.883 192.084 351.063 191.797 351.296 191.557C351.529 191.317 351.81 191.129 352.121 191.006C352.432 190.882 352.766 190.825 353.1 190.84H370.359C370.688 190.825 371.016 190.879 371.323 190.998C371.629 191.117 371.908 191.298 372.141 191.53C372.374 191.763 372.556 192.041 372.676 192.347C372.796 192.653 372.851 192.981 372.837 193.31L371.159 218.993Z'
          fill='url(#paint41_linear_325_165)'
        />
        <path
          d='M352.822 139.965C352.822 139.965 353.946 147.09 366.218 146.433C378.489 145.776 382.218 136.141 382.218 136.141'
          stroke='white'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M231.7 357.991C231.7 357.991 224.195 356.337 221.321 357.366C218.447 358.395 217.711 360.533 217.505 362.821C217.299 365.109 219.714 368.363 229.04 371.814C238.594 375.221 248.325 378.109 258.19 380.468C261.246 381.085 266.424 382.004 270.858 381.75C272.076 381.662 273.235 381.189 274.167 380.399C275.099 379.609 275.756 378.544 276.043 377.356C276.269 376.444 276.577 375.554 276.962 374.696C277.753 373.113 277.453 371.244 277.912 369.946C278.371 368.648 279.495 359.654 276.962 358.355C274.428 357.057 270.343 364.744 264.738 364.111C259.133 363.478 258.507 356.463 258.507 356.463C258.507 356.463 261.183 354.017 259.742 352.299C258.301 350.581 259.956 349.219 258.816 348.538C257.676 347.857 253.654 350.256 253.654 350.256C253.654 350.256 240.71 355.577 235.635 357.722C234.606 358.118 231.7 357.991 231.7 357.991Z'
          fill={mainColor}
        />
        <path
          d='M220.878 364.673C237.504 374.174 256.837 374.372 256.837 374.372C262.244 375.63 267.644 379.225 274.579 375.1L275.189 374.767'
          stroke='white'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M325.596 339.774C325.596 339.774 335.2 342.664 337.076 345.791C338.952 348.918 345.365 339.378 342.539 333.987C339.712 328.595 343.568 329.474 346.22 331.667C348.872 333.86 351.018 332.269 352.87 333.844C354.723 335.42 358.531 338.911 355.752 345.467C352.973 352.022 346.75 354.84 344.28 359.757C341.81 364.673 342.697 374.688 338.905 378.433C335.112 382.178 327.908 386.967 319.738 382.969C311.567 378.971 318.867 368.038 320.767 365.315C322.667 362.591 323.039 353.281 323.142 349.481C323.245 345.68 322.619 340.906 325.596 339.774Z'
          fill={mainColor}
        />
        <path
          d='M345.991 332.855C345.991 332.855 351.367 334.486 349.506 341.057C347.646 347.628 340.829 352.655 340.156 359.598C339.483 366.542 339.523 372.709 332.801 377.744C326.08 382.779 323.143 382.075 323.143 382.075'
          stroke='white'
          strokeWidth='0.76'
          strokeMiterlimit='10'
        />
        <defs>
          <linearGradient
            id='paint0_linear_325_165'
            x1='-0.00568575'
            y1='209.928'
            x2='496.002'
            y2='209.928'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F0F2F5' />
            <stop offset='0.99' stopColor='#F5F7F8' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_325_165'
            x1='68.3021'
            y1='334.494'
            x2='48.8738'
            y2='187.095'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint2_linear_325_165'
            x1='67.3205'
            y1='330.701'
            x2='50.2357'
            y2='201.045'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={minorColor} />
            <stop offset='0.99' stopColor='#20A357' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_325_165'
            x1='124.805'
            y1='330.409'
            x2='112.891'
            y2='217.692'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint4_linear_325_165'
            x1='79.9717'
            y1='293.128'
            x2='136.037'
            y2='293.316'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#BAC6D8' />
            <stop offset='0.99' stopColor='#D6DBF8' />
          </linearGradient>
          <linearGradient
            id='paint5_linear_325_165'
            x1='66.9245'
            y1='283.294'
            x2='44.8202'
            y2='261.578'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint6_linear_325_165'
            x1='66.228'
            y1='301.551'
            x2='40.5057'
            y2='292.597'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint7_linear_325_165'
            x1='68.1432'
            y1='283.239'
            x2='91.53'
            y2='264.84'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint8_linear_325_165'
            x1='66.4417'
            y1='301.583'
            x2='89.1476'
            y2='290.705'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint9_linear_325_165'
            x1='70.4948'
            y1='318.668'
            x2='40.2598'
            y2='315.057'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint10_linear_325_165'
            x1='67.1386'
            y1='320.789'
            x2='87.7862'
            y2='308.17'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='0.99' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint11_linear_325_165'
            x1='74.8809'
            y1='235.626'
            x2='67.811'
            y2='264.523'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#20A357' />
            <stop offset='1' stopColor={mainColor} />
          </linearGradient>
          <linearGradient
            id='paint12_linear_325_165'
            x1='52.7875'
            y1='276.25'
            x2='59.345'
            y2='269.607'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint13_linear_325_165'
            x1='51.5256'
            y1='302.695'
            x2='54.4025'
            y2='293.724'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint14_linear_325_165'
            x1='66.3896'
            y1='266.4'
            x2='72.2751'
            y2='273.687'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint15_linear_325_165'
            x1='80.011'
            y1='300.617'
            x2='89.7568'
            y2='290.626'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#BBC0D9' />
            <stop offset='1' stopColor='#D6DBF8' />
          </linearGradient>
          <linearGradient
            id='paint16_linear_325_165'
            x1='73.6914'
            y1='303.076'
            x2='78.5374'
            y2='311.368'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint17_linear_325_165'
            x1='65.1498'
            y1='298.679'
            x2='78.536'
            y2='295.495'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint18_linear_325_165'
            x1='58.2345'
            y1='328.65'
            x2='58.5986'
            y2='319.548'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint19_linear_325_165'
            x1='80.2333'
            y1='316.308'
            x2='89.9553'
            y2='305.525'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#BBC0D9' />
            <stop offset='1' stopColor='#D6DBF8' />
          </linearGradient>
          <linearGradient
            id='paint20_linear_325_165'
            x1='85.1935'
            y1='323.416'
            x2='88.9537'
            y2='333.353'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E0E4EB' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint21_linear_325_165'
            x1='76.4005'
            y1='235.215'
            x2='69.3306'
            y2='264.112'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E6EAF1' />
            <stop offset='0.99' stopColor='#F3F6FD' />
          </linearGradient>
          <linearGradient
            id='paint22_linear_325_165'
            x1='47.5029'
            y1='362.005'
            x2='101.354'
            y2='349.631'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.11' stopColor='#713000' />
            <stop offset='0.56' stopColor='#A04400' />
            <stop offset='1' stopColor='#DC7B33' />
          </linearGradient>
          <linearGradient
            id='paint23_linear_325_165'
            x1='323.094'
            y1='317.227'
            x2='344.003'
            y2='317.227'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#94A39A' />
            <stop offset='1' stopColor='#C6CFCA' />
          </linearGradient>
          <linearGradient
            id='paint24_linear_325_165'
            x1='343.473'
            y1='348.713'
            x2='333.712'
            y2='331.556'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint25_linear_325_165'
            x1='373.114'
            y1='88.9955'
            x2='378.68'
            y2='88.9955'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint26_linear_325_165'
            x1='400.587'
            y1='312.749'
            x2='421.829'
            y2='312.749'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#61796B' />
            <stop offset='1' stopColor='#DEEFE5' />
          </linearGradient>
          <linearGradient
            id='paint27_linear_325_165'
            x1='371.712'
            y1='318.683'
            x2='391.449'
            y2='318.683'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#61796B' />
            <stop offset='1' stopColor='#DEEFE5' />
          </linearGradient>
          <linearGradient
            id='paint28_linear_325_165'
            x1='372.837'
            y1='273.691'
            x2='372.837'
            y2='143.037'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#0B1F14' />
            <stop offset='0.39' stopColor={minorColor} />
            <stop offset='1' stopColor='#143D25' />
          </linearGradient>
          <linearGradient
            id='paint29_linear_325_165'
            x1='413.871'
            y1='211.178'
            x2='425.747'
            y2='212.366'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.11' stopColor='#0C331D' />
            <stop offset='0.56' stopColor={minorColor} />
            <stop offset='1' stopColor='#20A357' />
          </linearGradient>
          <linearGradient
            id='paint30_linear_325_165'
            x1='260.187'
            y1='367.009'
            x2='272.521'
            y2='344.01'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint31_linear_325_165'
            x1='323.142'
            y1='206.895'
            x2='316.065'
            y2='185.979'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='0.05' stopColor='#793300' />
            <stop offset='0.38' stopColor='#8E3D00' />
            <stop offset='0.7' stopColor='#9C4200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint32_linear_325_165'
            x1='207.736'
            y1='189.399'
            x2='314.252'
            y2='189.399'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.01' stopColor='#BBBFD9' />
            <stop offset='0.29' stopColor='#CACDE2' />
            <stop offset='0.84' stopColor='#F2F3F8' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paint33_linear_325_165'
            x1='330.995'
            y1='230.116'
            x2='330.995'
            y2='352.868'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={mainColor} />
            <stop offset='1' stopColor={minorColor} />
          </linearGradient>
          <linearGradient
            id='paint34_linear_325_165'
            x1='312.058'
            y1='130.457'
            x2='353.615'
            y2='106.706'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint35_linear_325_165'
            x1='341.843'
            y1='88.7659'
            x2='366.267'
            y2='72.9794'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A04400' stopOpacity='0' />
            <stop offset='0.18' stopColor='#9A4100' stopOpacity='0.14' />
            <stop offset='0.52' stopColor='#8A3B00' stopOpacity='0.52' />
            <stop offset='0.9' stopColor='#753200' />
          </linearGradient>
          <linearGradient
            id='paint36_linear_325_165'
            x1='326.697'
            y1='232.808'
            x2='326.697'
            y2='219.309'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.11' stopColor={mainColor} />
            <stop offset='0.56' stopColor={minorColor} />
            <stop offset='1' stopColor='#20A357' />
          </linearGradient>
          <linearGradient
            id='paint37_linear_325_165'
            x1='299.74'
            y1='210.482'
            x2='325.391'
            y2='176.945'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='0.16' stopColor='#F2F3F8' />
            <stop offset='0.71' stopColor='#CACDE2' />
            <stop offset='0.99' stopColor='#BBBFD9' />
          </linearGradient>
          <linearGradient
            id='paint38_linear_325_165'
            x1='375.711'
            y1='110.918'
            x2='354.335'
            y2='131.898'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#A04400' />
            <stop offset='1' stopColor='#753200' />
          </linearGradient>
          <linearGradient
            id='paint39_linear_325_165'
            x1='375.805'
            y1='96.1446'
            x2='373.042'
            y2='98.8522'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint40_linear_325_165'
            x1='366.005'
            y1='161.214'
            x2='363.598'
            y2='198.86'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#753200' />
            <stop offset='1' stopColor='#A04400' />
          </linearGradient>
          <linearGradient
            id='paint41_linear_325_165'
            x1='350.622'
            y1='204.916'
            x2='372.853'
            y2='204.916'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='0.16' stopColor='#F2F3F8' />
            <stop offset='0.71' stopColor='#CACDE2' />
            <stop offset='0.99' stopColor='#BBBFD9' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default ProductImage
