import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import React from 'react'

function ThemeChanger() {
    const themeValues = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    })

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                Theme</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {themeValues.map((theme, index) => (
                    <button key={index} class="outline-base-content overflow-hidden rounded-lg text-left"
                        data-set-theme={theme} data-act-class="[&amp;_svg]:visible">
                        <div data-theme={theme} class="bg-base-100 text-base-content w-full cursor-pointer font-sans"><div class="grid grid-cols-5 grid-rows-3"><div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                            <div class="flex-grow text-sm font-bold">{theme}</div>
                            <div class="flex flex-shrink-0 flex-wrap gap-2 h-full">
                                <div class="bg-primary w-2 rounded"></div>
                                <div class="bg-secondary w-2 rounded"></div>
                                <div class="bg-accent w-2 rounded"></div>
                                <div class="bg-neutral w-2 rounded"></div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </button>
                ))
                }
            </ul>
        </div>
    )
}

export default ThemeChanger